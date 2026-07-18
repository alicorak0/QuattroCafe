import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as signalR from '@microsoft/signalr';
import { MENU_HUB_URL ,TENANT_SLUG} from '../constants/categoryConstants';


@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private readonly platformId = inject(PLATFORM_ID);
  private hubConnection?: signalR.HubConnection;
  private tenantSlug?: string;
  private startPromise?: Promise<void>;
  private joinedTenantSlug?: string | null = null;
  private joinInProgress = false;
  private pendingHandlers: { name: string; callback: (...args: any[]) => void }[] = [];

      constructor() {
        // noop
      }

        // Hub bağlantısını başlat. İdempotent: birden fazla çağrı varsa aynı başlatmayı bekler.
  public startConnection(tenantSlug?: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.resolve();
    }

    this.tenantSlug = tenantSlug ?? TENANT_SLUG;

    // Eğer zaten bağlıysa hemen dön
    if (this.hubConnection && this.hubConnection.state === signalR.HubConnectionState.Connected) {
      return Promise.resolve();
    }

    // Eğer başlatma zaten devam ediyorsa onu bekle
    if (this.startPromise) {
      return this.startPromise;
    }

    const hubUrl = this.tenantSlug
      ? `${MENU_HUB_URL}?tenant=${encodeURIComponent(this.tenantSlug)}`
      : MENU_HUB_URL;

    // Create new connection only if none exists or previous one is disconnected
    if (!this.hubConnection || this.hubConnection.state === signalR.HubConnectionState.Disconnected) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(hubUrl)
        .withAutomaticReconnect()
        .build();

      // lifecycle handlers
      this.hubConnection.onreconnecting((error) => {
        console.warn('SignalR reconnecting', error);
      });

      this.hubConnection.onreconnected((connectionId) => {
        console.log('SignalR reconnected', connectionId);
        // clear joined flag so group rejoin happens once after reconnect
        this.joinedTenantSlug = null;
        if (this.tenantSlug) {
          // attempt rejoin but don't block callers
          this.joinTenantGroup(this.tenantSlug).catch(err => console.error('Rejoin error', err));
        }
      });

      this.hubConnection.onclose((error) => {
        console.warn('SignalR closed', error);
        // reset state so next startConnection can re-create
        this.joinedTenantSlug = null;
      });

      // attach any pending handlers registered before connection
      for (const h of this.pendingHandlers) {
        this.hubConnection.on(h.name, h.callback);
      }
      this.pendingHandlers = [];
    }

    this.startPromise = this.hubConnection.start()
      .then(() => {
        console.log('SignalR connected');
        if (this.tenantSlug) {
          return this.joinTenantGroup(this.tenantSlug);
        }
        return Promise.resolve();
      })
      .catch(err => {
        console.error('SignalR connection error:', err);
        // if start failed, clear hubConnection so next attempt can recreate
        try { this.hubConnection = undefined; } catch {}
      })
      .finally(() => {
        this.startPromise = undefined;
      });

    // ensure consumers can wait for connection
    return this.startPromise!;
  }

 //gROUPS 
   public async joinTenantGroup(tenantSlug: string): Promise<void> {
    if (!tenantSlug) return;

    // Ensure connection present
    try {
      await this.ensureConnected();
    } catch (err) {
      console.error('Cannot join tenant group, connection not ready', err);
      return;
    }

    // Avoid duplicate join for same tenant
    if (this.joinedTenantSlug === tenantSlug) {
      return;
    }

    if (!this.hubConnection) return;

    if (this.joinInProgress) {
      // another join is running - wait a bit for it to finish
      let tries = 0;
      while (this.joinInProgress && tries < 10) {
        await new Promise(r => setTimeout(r, 100));
        tries++;
      }
      if (this.joinedTenantSlug === tenantSlug) return;
    }

    this.joinInProgress = true;
    try {
      await this.hubConnection.invoke('JoinTenantGroup', tenantSlug);
      this.joinedTenantSlug = tenantSlug;
      console.log(`SignalR joined tenant group: ${tenantSlug}`);
    } catch (error) {
      console.error('SignalR join tenant group error:', error);
    } finally {
      this.joinInProgress = false;
    }
  }



  // ✅ TEK EVENT
  public onMenuUpdated(callback: () => void): void {
    if (!this.hubConnection) {
      // queue handler to attach once connection is created
      this.pendingHandlers.push({ name: 'MenuUpdated', callback });
      return;
    }

    this.hubConnection.on('MenuUpdated', callback);
  }

  // Ensure the hub is connected. Starts connection if needed.
  public async ensureConnected(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return Promise.reject('Not in browser');

    if (this.hubConnection && this.hubConnection.state === signalR.HubConnectionState.Connected) {
      return Promise.resolve();
    }

    // startConnection will return a promise that completes when started (and joined)
    await this.startConnection(this.tenantSlug);

    if (!this.hubConnection || this.hubConnection.state !== signalR.HubConnectionState.Connected) {
      return Promise.reject('SignalR not connected');
    }
  }

  // Safe invoke that waits for connection
  public async invokeSafe(methodName: string, ...args: any[]): Promise<any> {
    await this.ensureConnected();
    if (!this.hubConnection) throw new Error('No hubConnection');
    return this.hubConnection.invoke(methodName, ...args);
  }

}

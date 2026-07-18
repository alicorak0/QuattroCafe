import { Injectable } from '@angular/core';
import { R2_PUBLIC_BASE_URL, TENANT_SLUG } from '../constants/categoryConstants';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private readonly r2Base = R2_PUBLIC_BASE_URL.replace(/\/$/, '');
  private readonly tenantSlug = TENANT_SLUG;

  private readonly commonAssets = new Set<string>([
    'nophoto.jpg',
    'Quattro-logo.png',
  ]);


  // getAsset(path: string): string {
  //   return `${this.assetBase}/${path}`;
  // }

  getProduct(path?: string | null): string {
    const normalized = (path ?? '').trim();

    if (!normalized) {
      return `${this.r2Base}/common/nophoto.jpg`;
    }

    if (this.commonAssets.has(normalized)) {
      return `${this.r2Base}/common/${normalized}`;
    }

    return `${this.r2Base}/${this.tenantSlug}/products/${normalized}`;
  }

  getAllergenIcon(fileName?: string | null): string {
    const normalized = (fileName ?? '').trim();
    if (!normalized) {
      return '/assets/icons/allergens/gluten.svg';
    }

    return `/assets/icons/allergens/${normalized}`;
  }


}

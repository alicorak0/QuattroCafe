import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  const clonedReq = req.clone({
    withCredentials: true
  });

  return next.handle(clonedReq).pipe(

    catchError((error: HttpErrorResponse) => {
      const errorMessage = this.resolveErrorMessage(error);

      if (error.status === 401) {
        this.toastr.warning(errorMessage || "Lütfen giriş yapınız");

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      }

      else if (error.status === 403) {
        this.toastr.error(errorMessage || "Bu işlem için yetkiniz yok!");
      }

      else if (error.status === 429) {
        this.toastr.warning(
          errorMessage || "Çok fazla istek attınız, biraz bekleyin"
        );
      }

      else if (error.status === 0) {
        this.toastr.error("Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.");
      }

      else {
        this.toastr.error(errorMessage || "Beklenmeyen bir hata oluştu.");
      }

      return throwError(() => error);
    })
  );
}

  private resolveErrorMessage(error: HttpErrorResponse): string {
    if (typeof error.error === 'string' && error.error.trim()) {
      return error.error;
    }

    if (error.error && typeof error.error === 'object') {
      const apiMessage = error.error?.message || error.error?.Message;
      if (typeof apiMessage === 'string' && apiMessage.trim()) {
        return apiMessage;
      }
    }

    if (typeof error.message === 'string' && error.message.trim()) {
      return error.message;
    }

    return 'Bir hata oluştu.';
  }

}
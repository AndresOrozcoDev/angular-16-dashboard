import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoader();

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.hideLoader();
      }
    ));
  }
}

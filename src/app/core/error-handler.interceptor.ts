import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorMessageService } from '../services/error-message.service';
import { MessageType } from '../types/message';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private errorMessage: ErrorMessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.errorMessage.getErrorMessage({
          message: err?.error?.message || 'Something went wrong!',
          type: MessageType.Error,
        });
        return throwError(err);
      })
    );
  }
}

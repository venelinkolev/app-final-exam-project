import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../types/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userServise: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (event.url?.endsWith('login') || event.url?.endsWith('register')) {
            console.log('login/register');
            //const user: IUser = event.body;
            console.log(event.body);
            this.userServise.loginHandled(event.body as IUser);
          } else if (event.url?.endsWith('logout')) {
            console.log('logout');
            this.userServise.logoutHandled();
          }
        }
      })
    );
  }
}
export const authInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

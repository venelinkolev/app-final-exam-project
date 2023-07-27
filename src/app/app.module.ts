import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { PageModule } from './feature/pages/page.module';
import { AuthInterceptor } from './core/auth.interceptor';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    PageModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: AuthInterceptor,
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: (userService: UserService) => {
        return () => userService.authUser();
      },
      deps: [UserService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

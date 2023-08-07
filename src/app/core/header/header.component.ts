import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ErrorMessageService } from 'src/app/services/error-message.service';
import { UserService } from 'src/app/services/user.service';
import { MessageType } from 'src/app/types/message';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isLogout: boolean = false;

  isLogin$: Observable<boolean> = this.userService.isLogin$;
  // isLogin!: boolean;

  message!: string;
  messageErrorType!: boolean;

  userFullName$: Observable<string | null> = this.userService.userFullName$;

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private userService: UserService,
    private errorMessage: ErrorMessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.errorMessage.newMessage$.subscribe(
      (newMessage) => {
        this.message = newMessage?.message || '';
        this.messageErrorType = newMessage?.type === MessageType.Error;

        if (this.message) {
          setTimeout(() => {
            this.errorMessage.remove();
          }, 3000);
        }
      }
    );

    // this.subscription = this.userService.isLogin$.subscribe((isLogin) => {
    //   this.isLogin = isLogin;
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    if (this.isLogout) {
      return;
    }

    this.isLogout = true;
    // console.log('logout called');

    this.userService.logout$().subscribe({
      next: () => {
        //
      },
      complete: () => {
        this.isLogout = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLogout = false;
      },
    });
  }
}

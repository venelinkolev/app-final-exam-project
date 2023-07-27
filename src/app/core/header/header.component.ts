import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private isLogout: boolean = false;

  isLogin$: Observable<boolean> = this.userService.isLogin$;
  user$: Observable<IUser> = this.userService.user$;

  constructor(private router: Router, private userService: UserService) {}

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

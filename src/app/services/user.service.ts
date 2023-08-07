import { Injectable } from '@angular/core';
import { IUser, LUser, User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.url;

  private _user = new BehaviorSubject<IUser | undefined>(undefined);

  user$: Observable<IUser | undefined> = this._user.asObservable();
  isLogin$: Observable<boolean> = this.user$.pipe(map((user) => !!user));
  userId$: Observable<string> = this.user$.pipe(
    map((user) => {
      if (!!user) {
        return user._id;
      }
      return '';
    })
  );
  userFullName$: Observable<string | null> = this.user$.pipe(
    map((user) => {
      if (!!user) {
        return `${user?.firstName} ${user?.lastName}`;
      }
      return null;
    })
  );

  constructor(private httpClient: HttpClient) {}

  logout$(): Observable<void> {
    return this.httpClient.post<void>(
      `${this.url}/logout`,
      {},
      { withCredentials: true }
    );
  }

  register$(body: User): Observable<IUser> {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    // });
    return this.httpClient.post<IUser>(`${this.url}/register`, body, {
      withCredentials: true,
    });
  }

  login$(body: LUser): Observable<LUser> {
    return this.httpClient.post<LUser>(`${this.url}/login`, body, {
      withCredentials: true,
    });
  }

  authUser(): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${this.url}/users/profile`, { withCredentials: true })
      .pipe(
        tap((currentUser) => this.loginHandled(currentUser)),
        catchError(() => EMPTY)
      );
  }

  loginHandled(loggingUser: IUser) {
    this._user.next(loggingUser);
  }

  logoutHandled(): void {
    this._user.next(undefined!);
  }

  // getUser$(): Observable<IUser> {
  //   return this.httpClient.get<IUser>(`${this.url}/`);
  // }
}

import { Injectable } from '@angular/core';
import { IUser, LUser } from '../types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | undefined;
  url = environment.url;

  get isLogged() {
    return !!this.user;
  }

  constructor(private httpClient: HttpClient) {}

  register$(body: IUser): Observable<IUser> {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    // });
    return this.httpClient.post<IUser>(`${this.url}/register`, body, {
      withCredentials: true,
    });
  }

  login$(body: LUser): Observable<LUser> {
    return this.httpClient.post<LUser>(`${this.url}/login`, body, { withCredentials: true });
  }

  // getUser$(): Observable<IUser> {
  //   return this.httpClient.get<IUser>(`${this.url}/`);
  // }
}

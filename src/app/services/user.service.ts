import { Injectable } from '@angular/core';
import { IUser } from '../types/user';
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
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    return this.httpClient.post<IUser>(`${this.url}user/.json`, body, {
      withCredentials: true,
      headers: headers,
    });
  }

  login$() {}

  getUser$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/user`);
  }
}

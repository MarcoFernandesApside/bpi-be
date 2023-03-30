import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { loginAPI } from './constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(
      loginAPI['login'],
      { email, password },
      {
        responseType: 'json',
      }
    );
  }

  isLoged(token: string) {
    return this.http.get(loginAPI['check'], {
      responseType: 'json',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  logout(token: string) {
    return this.http.get(loginAPI['logout'], {
      responseType: 'json',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  user(token: string) {
    return this.http.get(loginAPI['user'], {
      responseType: 'json',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}

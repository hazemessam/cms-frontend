import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtPayload, LoginReq, LoginRes, User } from '../models/auth.model';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { AUTH_TOKEN_KEY, BACKEND_BASE_URL } from '../../constants';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$ = new BehaviorSubject<User | null>(null);

  constructor(private httpClient: HttpClient) {}

  public login(loginReq: LoginReq) {
    return this.httpClient
      .post<LoginRes>(`${BACKEND_BASE_URL}/auth/login`, loginReq)
      .pipe(
        map((res) => res.authToken),
        tap((authToken) => {
          localStorage.setItem(AUTH_TOKEN_KEY, authToken);
          this.loadUser(authToken);
        })
      );
  }

  public logout() {
    this.user$.next(null);
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  public loadUser(token?: string) {
    const jwtToken = token || localStorage.getItem(AUTH_TOKEN_KEY);
    if (jwtToken) {
      const payload = jwtDecode<JwtPayload>(jwtToken);
      this.user$.next({ name: payload.name, role: payload.role });
    }
  }
}

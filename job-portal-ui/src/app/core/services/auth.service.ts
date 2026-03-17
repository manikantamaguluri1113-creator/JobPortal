import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiBaseUrl;
private readonly LOGIN_URL = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) {}


login(payload: LoginRequest) {
  return this.http.post<LoginResponse>(this.LOGIN_URL, payload).pipe(
    tap(res => {
      sessionStorage.clear();
      
      const decoded: any = jwtDecode(res.token);
      // console.log('DECODED DIRECT:', decoded);
      if (decoded?.role) {
        sessionStorage.setItem('role', decoded.role);
      }

      if (decoded?.sub) {
        sessionStorage.setItem('email', decoded.sub);
        //console.log(localStorage.getItem('email'));
      }

      if (decoded?.userId !== undefined) {
        sessionStorage.setItem('userId', decoded.userId.toString());
      }
      sessionStorage.setItem('token', res.token);
    })
  );
}

getEmail(): string | null {
  return sessionStorage.getItem('email');
}

getRoleLabel(): string {
  const role = this.getRole();

  if (role === 'ADMIN') return 'Admin';
  if (role === 'HR') return 'HR';
  if (role === 'CANDIDATE') return 'Candidate';

  return '';
}


private decodeToken(token: string): any {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
}
 
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // saveAuthData(response: LoginResponse): void {
  //   localStorage.setItem('token', response.token);
  //   localStorage.setItem('role', response.role);
  //   localStorage.setItem('email', response.email);
  // }

  getRole(): string | null {
    return sessionStorage.getItem('role');
  }

  isAdmin(): boolean {
  return this.getRole() === 'ADMIN';
}

isHr(): boolean {
  return this.getRole() === 'HR';
}

isCandidate(): boolean {
  return this.getRole() === 'CANDIDATE';
}

}

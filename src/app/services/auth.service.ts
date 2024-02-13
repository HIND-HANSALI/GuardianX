import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environement/environment';
import { LoginDto } from '../dtos/LoginDto';
import { RegisterDto } from '../dtos/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/authenticate`, {email, password });
  // }
  login(user: LoginDto): Observable<string> {
    this.removeToken();
    return this.http.post<{ token : string }>(`${environment.apiUrl}/auth/authenticate`, user)
      .pipe(
        map(response => {
          this.setToken(response.token)
          return response.token
        }),
      );
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }


  register(user: RegisterDto): Observable<string>{
    this.removeToken()
    return this.http.post<{ token : string }>(`${environment.apiUrl}/auth/register`, user)
      .pipe(
         map(response => {
           this.setToken(response.token)
           return response.token
         }),
      );
  }


  // testApi(): Observable<string> {
  //   return this.http.get<string>(`${environment.apiUrl}/auth/test`);
  // }

  testApi(): Observable<string> {
    
    return this.http.get(`${environment.apiUrl}/auth/test`, { responseType: 'text' });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string;
  private isAuthenticated = false;


  setToken(token: string) {
    this.token = token;
  }

  getToken(): String  {
    return this.token|| '';;
  }



  private authUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    const body = { username, password };
    this.isAuthenticated = true;
    return this.http.post<any>(this.authUrl, body);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  header(): HttpHeaders{
    const token = this.getToken()
  return new HttpHeaders({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
});
  }

}

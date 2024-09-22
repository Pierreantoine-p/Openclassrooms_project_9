import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static token: string;


  setToken(token: string) {
    AuthService.token = token;
  }

  static getToken(): String  {
    return this.token|| '';
  }

  private authUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    const body = { username, password };
    return this.http.post<any>(this.authUrl, body);
  }


  header(): HttpHeaders{
    const token = AuthService.getToken()

  const result =  new HttpHeaders({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'

});

return result;
  }

}

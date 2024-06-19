import { Injectable, Injector, inject } from "@angular/core";
import { HttpClient  , HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";
import { ApiUrlService } from "./api-url.service";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user : User | null = null;
  private apiUrl = '/api'
  private authService = inject(AuthService);
  private http = inject(HttpClient);
  private apiUrlService = inject(ApiUrlService);

  constructor(private injector: Injector) { }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }


  getUserByName(firstName : string, lastName : string): Observable<any>{
    //const url = `${this.apiUrl}/${firstName}/${lastName}`;
    const url = this.apiUrlService.getUrl(`/user/${firstName}/${lastName}`);
    console.log('Request URL:', this.apiUrl);
    console.log('Request URL:', url);
    const headers = this.authService.createAuthHeaders()
    return this.http.get(url, {headers}).pipe(
      catchError(this.handleError)
    )
    ;
  }

  updateUser(user: User): Observable<User>{
    const url = `${this.apiUrl}/update`;
    const headers = this.authService.createAuthHeaders()
    return this.http.post<User>(`${url}`, user, {headers});
  }

  addUser(user: User): Observable<User>{
    const headers = this.authService.createAuthHeaders()
    return this.http.post<User>(`${this.apiUrl}/add`, user, {headers});
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}

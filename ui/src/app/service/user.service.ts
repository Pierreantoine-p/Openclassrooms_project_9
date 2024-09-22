
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null = null;
  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/'

  constructor(private authService: AuthService) {}

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }

  getUserByName(firstName: string, lastName: string): Observable<User> {

  const url = `${this.baseUrl}user/${firstName}/${lastName}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}user/update`;
    const headers = this.authService.header()
    return this.http.post<User>(url, user, { headers });
  }

  addUser(user: User): void {
    const headers = this.authService.header()
    this.http.post<User>(`${this.baseUrl}user/add`, user, { headers }).subscribe();
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

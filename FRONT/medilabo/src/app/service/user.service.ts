import { Injectable, inject } from "@angular/core";
import { HttpClient  , HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user : User | null = null;

  private apiUrl = 'http://localhost:8080/'

  constructor() { }

  private http = inject(HttpClient);

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }


  getUserByName(firstName : string, lastName : string): Observable<any>{
    const url = `${this.apiUrl}user/${firstName}/${lastName}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
    ;
  }

  updateUser(user: User): Observable<User>{
    const url = `${this.apiUrl}/update`;
    return this.http.post<User>(`${url}`, user);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/add`, user);
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

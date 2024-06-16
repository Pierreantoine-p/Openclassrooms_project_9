import { Injectable, Injector, inject } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient  , HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Note } from "../models/note.model";
import { AuthService } from "./auth.service";



@Injectable({
  providedIn: 'root'
})

export class NoteService {

  private apiUrl = ''
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  constructor(private injector: Injector) { }


  getNotes(id :number): Observable<Note[]>{
    const url = `${this.apiUrl}notes?id=${id}`;
    const headers = this.authService.createAuthHeaders();
    return this.http.get<Note[]>(url, {headers}).pipe(
      catchError(this.handleError)
    )
  }
  addUser( note : Note) : Observable<Note>{
    const headers = this.authService.createAuthHeaders()
    return this.http.post<Note>(`${this.apiUrl}/add`, note, {headers})
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

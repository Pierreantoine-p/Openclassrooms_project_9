import { Injectable, inject } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient  , HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Note } from "../models/note.model";



@Injectable({
  providedIn: 'root'
})

export class NoteService {

  private apiUrl = 'http://localhost:8080/notes'


  constructor(private noteService : NoteService) { }

  private http = inject(HttpClient);

  getNotes(id :number): Observable<Note[]>{
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Note[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  addUser( note : Note) : Observable<Note>{
    return this.http.post<Note>(`${this.apiUrl}/add`, note)
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

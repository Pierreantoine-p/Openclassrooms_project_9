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
  private url = 'http://localhost:6060/';

  constructor(private injector: Injector) { }


  getNotes(id :number): Observable<Note[]>{
    //const url = `${this.apiUrl}notes?id=${id}`;
    const url = `${this.url}note/${id}`;
    const headers = this.authService.createAuthHeaders();
    return this.http.get<Note[]>(url, {headers}).pipe(
      catchError(this.handleError)
    )
  }
  addNote( note : Note) : void{
   // const headers = this.authService.createAuthHeaders()
   // const data = this.http.post<Note>(`${this.url}note/add`, note, {headers})
   this.http.post<Note>(`${this.url}note/add`, note).subscribe();
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

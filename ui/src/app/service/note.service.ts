import { Injectable, inject } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient  , HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Note } from "../models/note.model";
import { ApiUrlService } from "./api-url.service";



@Injectable({
  providedIn: 'root'
})

export class NoteService {

  private http = inject(HttpClient);
  private apiUrlService = inject(ApiUrlService);
  private baseUrl: string = 'http://localhost:8080/'


  constructor() { }


  getNotes(id :number): Observable<Note[]>{
    const url = `${this.baseUrl}note/${id}`;
    return this.http.get<Note[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  addNote( note : Note) : Observable<any>{
   return this.http.post<Note>(`${this.baseUrl}note/add`, note);
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

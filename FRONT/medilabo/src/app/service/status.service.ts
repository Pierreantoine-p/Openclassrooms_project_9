import { Injectable, inject } from "@angular/core";
import { NoteService } from "./note.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StatusService {

  private apiUrl = 'http://localhost:8080/report/'

  constructor(private noteService : NoteService) { }

  private http = inject(HttpClient);

getStatus(firstName : String, lastName : String){
  const url = `${this.apiUrl}?firstName=${firstName}/lastName=${lastName}`;
  return this.http.get(url).pipe(
    catchError(this.handleError)

  )
}

private handleError(error: HttpErrorResponse): Observable<any> {
  let errorMessage = 'Unknown error occurred';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}
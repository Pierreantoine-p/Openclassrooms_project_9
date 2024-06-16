import { Injectable, inject } from "@angular/core";
import { NoteService } from "./note.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class StatusService {

  private apiUrl = ''
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  constructor(private noteService : NoteService) { }


getStatus(firstName : String, lastName : String){
  const url = `${this.apiUrl}report?firstName=${firstName}/lastName=${lastName}`;
  const headers = this.authService.createAuthHeaders()
  return this.http.get(url, {headers}).pipe(
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

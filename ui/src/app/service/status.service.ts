import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ApiUrlService } from "./api-url.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class StatusService {

  private http = inject(HttpClient);
  private apiUrlService = inject(ApiUrlService);
  private baseUrl: string = 'http://localhost:8080/'

  constructor(private authService: AuthService) {}



getStatus(firstName : String, lastName : String){
  const url = `${this.baseUrl}report?firstName=${firstName}/lastName=${lastName}`;
  const headers = this.authService.header()
  return this.http.get(url,  { headers }).pipe(
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

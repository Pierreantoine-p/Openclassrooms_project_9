import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StatusService {

  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/'

  constructor(private authService: AuthService) { }



  getStatus(id: number) {
    const url = `${this.baseUrl}report/${id}`;
    const headers = this.authService.header()
    return this.http.get(url, { headers }).pipe(
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

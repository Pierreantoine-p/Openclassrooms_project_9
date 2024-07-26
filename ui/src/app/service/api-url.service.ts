import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  private baseUrl: string = 'http://localhost:8080/';

  getUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }
}

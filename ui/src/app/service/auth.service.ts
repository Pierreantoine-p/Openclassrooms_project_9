import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  createAuthHeaders(): HttpHeaders {
    const username = 'user';
    const password = 'password';
    const base64Credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64Credentials}`
    });
  }
}

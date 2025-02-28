import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginData {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(public httpClient: HttpClient) { }

  signUp(receivedEmail: string, receivedPassword: string) {
    return this.httpClient.post<LoginData>('', {
      email: receivedEmail,
      password: receivedPassword
    })
  }
}

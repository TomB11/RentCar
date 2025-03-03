import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

interface LoginData {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public userLogged = signal('')

  constructor(public httpClient: HttpClient) { }

  signUp(receivedEmail: string, receivedPassword: string) {
    return this.httpClient.post<LoginData>('someBackendWEBPage/login', {
      email: receivedEmail,
      password: receivedPassword
    })
  }
}

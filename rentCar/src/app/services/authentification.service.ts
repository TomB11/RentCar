import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

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

  signUp(receivedEmail: string, receivedPassword: string): Observable<any> {
    console.log('ASASASSS')
    this.setLocalStorage(receivedEmail, receivedPassword)
    return this.httpClient.post<string>('someBackend/WebPage/login', {
      email: receivedEmail,
      password: receivedPassword
    })
  }

  setLocalStorage(email: string, pssw: string) {
    localStorage.setItem('email', email)
    localStorage.setItem('password', pssw)
  }

  
}

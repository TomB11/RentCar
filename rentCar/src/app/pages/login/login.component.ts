import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitCredentials } from '../../store/login.actions';
import { loginState } from '../../interfaces/loginState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userExist = true
  loginForm: FormGroup
  state$: Observable<loginState>

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthentificationService,
    public router: Router,
    public store: Store<{login: loginState}>
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.state$ = this.store.select('login')
  }

  onSubmit(form: FormGroup) {
    let email = form.get('email')?.value
    let pasw = form.get('password')?.value

    if(email === 'joe.doe@admin.com' && pasw === '000000') {
      this.authService.signUp(email, pasw).subscribe((data) => {
        console.log(data)
        // this.store.dispatch(submitCredentials({email: email, password: pasw}))
        // this.userExist = true
        // this.router.navigateByUrl('dashboard')
      }, error => {
        console.log(error)
      })

      this.store.dispatch(submitCredentials({email: email, password: pasw}))
      this.userExist = true
      this.router.navigateByUrl('dashboard')
      this.loginForm.reset()
    } else {
      this.userExist = false
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userExist = 0
  loginForm: FormGroup

  constructor(public formBuilder: FormBuilder, public authService: AuthentificationService, public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(form: FormGroup) {
    let email = form.get('email')?.value
    let pasw = form.get('password')?.value

    if(email === 'joe.doe@admin.com' && pasw === '000000') {
      this.authService.signUp(email, pasw).subscribe((data) => {
        console.log(data)
      }, error => {
        console.log(error)
      })
      
      this.userExist = 0
      this.authService.userLogged.set(email)
      this.router.navigateByUrl('dashboard')
      this.loginForm.reset()
    } else {
      this.userExist = 1
    }
  }
}

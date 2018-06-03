import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then((data) => {
      this.router.navigate(['']);
    });
  }


  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then((data) => {
      this.router.navigate(['']);
    });
  }

    tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }
}


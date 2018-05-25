import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  constructor(public authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

}

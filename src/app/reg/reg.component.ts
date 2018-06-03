import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  registerForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';
  // tslint:disable-next-line:no-inferrable-types
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
     this.registerForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required]
     });
   }

   tryRegister(value) {
     this.authService.doRegister(value)
     .then(res => {
       console.log(res);
       this.errorMessage = '';
       this.successMessage = 'Your account has been created';
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = '';
     });
   }

   tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    }, err => console.log(err)
    );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    }, err => console.log(err)
    );
  }

}

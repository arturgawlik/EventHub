import { Component } from '@angular/core';

import { Router} from '@angular/router';

import { AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: boolean;
  private user_displayName: string;
  private user_email: string;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.authState.subscribe((auth) => {
      if (auth == null) {
        // not logged in
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.user_email = '';
        this.router.navigate(['Login']);
      } else {
        // logged in
        this.isLoggedIn = true;
        this.user_displayName = auth.displayName;
        this.user_email = auth.email;
        this.router.navigate(['']);
      }
    });
  }

}

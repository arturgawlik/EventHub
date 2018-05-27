import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from '@firebase/app';


@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth ) {

  }

   test;

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.af.auth.signOut();
  }

}

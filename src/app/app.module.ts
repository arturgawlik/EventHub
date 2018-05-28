import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthService} from './services/auth.service';
import { HomePageComponent } from './home-page/home-page.component';
import {AngularFireAuth} from 'angularfire2/auth';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    FooterComponent,
    LoginPageComponent,
    HomePageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

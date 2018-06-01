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
import {MeetupService} from './services/meetup.service';

import { HomePageComponent } from './home-page/home-page.component';
import {AngularFireAuth} from 'angularfire2/auth';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';



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
    SearchComponent,
    AddEventComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [AuthService, AngularFireAuth, MeetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

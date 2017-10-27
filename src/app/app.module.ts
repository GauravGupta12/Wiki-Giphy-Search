import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {SearchHistoryComponent} from './search-history/search-history.component';
import {SearchGiphyService} from './services/search-giphy.service';
import {SearchWikiService} from './services/search-wiki.service';
import {SearchHistoryService} from './services/search-history.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService, Auth_Providers} from './authorization/auth.service';
import {RegisterComponent} from './registeration/register.component';
import {LoggedInGaurd} from './login/logged.in.gaurd';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [LoggedInGaurd]},
  { path: 'search-history', component: SearchHistoryComponent, canActivate: [LoggedInGaurd] }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Auth_Providers,LoggedInGaurd,SearchGiphyService,SearchWikiService, SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

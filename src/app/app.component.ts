import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user : string;


    constructor(private authServive:AuthService) { }  

    isLoggedIn(){
        if(this.authServive.isLoggedIn()){
          this.user = this.authServive.getUser();
        }
    }

    ngOnInit(){
      this.isLoggedIn();
    }

}

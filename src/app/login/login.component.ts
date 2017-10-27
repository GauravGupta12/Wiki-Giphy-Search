import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authorization/auth.service';



import { SearchHistoryService } from '../services/search-history.service';
import { SearchWikiService } from '../services/search-wiki.service';
import { SearchGiphyService } from '../services/search-giphy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private authService: AuthService) { 
    this.message = '';
  } 

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    return true;
  }

  logout(){
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}

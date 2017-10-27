import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Router } from "@angular/router";

import { SearchHistoryService } from '../services/search-history.service';
import { AuthService } from '../authorization/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    myForm: FormGroup;

    constructor(fb: FormBuilder, private authServive:AuthService,private router: Router) {
         this.myForm = fb.group({
         'username': ['', Validators.required],
         'email': ['', Validators.required],
         'password': ['', Validators.required]
         });       
         
         }

         registerNewUser(user: string, password: string,email: string){
                let isCreated = this.authServive.createNewUser(user, password,email);
                if(isCreated){
                        this.router.navigate(['/dashboard']);
                }
         }

         matchPassword(AC: AbstractControl) {
            let password = AC.get('password').value; // to get value in input tag
            let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
             if(password != confirmPassword) {
                 console.log('false');
                 AC.get('confirmPassword').setErrors( {MatchPassword: true} )
             } else {
                 console.log('true');
                 return null
             }
         }

         ngOnInit() {
        }

}

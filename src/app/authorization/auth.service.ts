import {Injectable} from '@angular/core';

@Injectable()   
export class AuthService{
    currentlyLoggedUser : string = "";
    login(user: string, password: string): boolean {
       
        if(user != "" && password != ""){
            this.currentlyLoggedUser = user;
            return this.isLoggedIn();
        }
        this.currentlyLoggedUser = "";
        return false;
      }


    createNewUser(user: string, password: string,email: string){
        if(user != "" && password != "pass" && email != ""){
            localStorage.setItem(user, user);
            this.currentlyLoggedUser = user;
            return true;
        }
    }
    logout(){
        localStorage.removeItem(this.currentlyLoggedUser);
        this.currentlyLoggedUser = "";
    }

    getUser():string{
        return localStorage.getItem(this.currentlyLoggedUser );
    }

    isLoggedIn(): boolean{
            return this.getUser() != null;
    }
}
export const Auth_Providers: Array<any> = [
    {provide: AuthService, useClass: AuthService}
]
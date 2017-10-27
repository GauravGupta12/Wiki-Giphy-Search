import {Injectable} from '@angular/core';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from '../authorization/auth.service';


@Injectable()
export class LoggedInGaurd implements CanActivate{

    constructor(private authService : AuthService){}

    canActivate(
        next : ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
                const isLoggedIn = this.authService.isLoggedIn();
                return isLoggedIn;
        }
       

}





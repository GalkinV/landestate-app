import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuardServie return ', this.authService.isAuthenticated());
    return this.authService.isAuthenticated();
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardService implements CanActivate {

  constructor(private router: Router, private hardcodedService: HardcodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedService.isUserLogedIn()) return true;

    this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
    return false;
  }

}

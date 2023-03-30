import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { getLoginService, getToken } from '../utils/important';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private keycloakService: KeycloakService,
    private loginService: LoginService
  ) {}

  login?: Subscription;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Observable<boolean | UrlTree>((observer) => {
      if (
        getLoginService('login') === 'internal' &&
        getToken('internal-login')
      ) {
        this.loginService
          .isLoged(getToken('internal-login'))
          .subscribe((data: any) => {
            console.log(data);
            if (data.success) {
              observer.next(true);
            } else {
              observer.next(this.router.parseUrl('/'));
            }
            observer.complete();
          });
      } else {
        this.keycloakService.isLoggedIn().then((isLogged: boolean) => {
          if (isLogged) {
            observer.next(true);
          } else {
            observer.next(this.router.parseUrl('/'));
          }
          observer.complete();
        });
      }
    });
  }
}

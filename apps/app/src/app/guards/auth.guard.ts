import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionQuery } from '../store/session.query';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionQuery: SessionQuery, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.sessionQuery.token$.pipe(
      tap((token) => {
        console.log('[auth guard] ' + token);
      }),
      map((token) => !!token),
      tap((canActivate) => {
        if (!canActivate) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}

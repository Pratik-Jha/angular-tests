import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface redirectAlert {
  confirm(): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class RedirectResponseGuard implements CanDeactivate<redirectAlert> {
  canDeactivate(
    component: redirectAlert,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.confirm();
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot):boolean {
                return true;
  }

}

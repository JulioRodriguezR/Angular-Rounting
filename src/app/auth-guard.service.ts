import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterEvent,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";

import { AuthService } from "./auth.service";

/**
 * Protección de ruta.
 * Angular debe ejecutar este código antes de cargar una ruta.
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  /**
   *
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   * @memberof AuthGuardService
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /* 
        canActivate puede ejecutarse de forma asíncrona o sincrónicamente.
        
        Puede haber guardias sobre un código ejecutado en el cliente (sincrónicamente)
        o es posible que tenga algún código que tarde unos segundos en finalizar, bien
        porque usas un tiempo de espera allí o porque te comuniques con un servidor   
      */
    return this.authService.isAuthenticated().then(
      // Retorna una Promesa
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          // Cancelación de la navegación
          // Hacer volver a la pag. raíz
          this.router.navigate(["/"]);
        }
      }
    );
  }
}

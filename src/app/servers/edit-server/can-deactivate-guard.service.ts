import { Observable } from "rxjs/Observable";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

export interface CanComponentDeactivate {
  // Permitiendo al enrutador pueda ejecutar el método
  // Asegurando que el componente lo tenga
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    // Llamándose al final... cuando se deja la ruta
    nextState?: RouterStateSnapshot // Arg opcional (?)
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Llamar al componente actual
    return component.canDeactivate();
  }
}

import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {CanDeactivateAbstract} from "./canDeactivateAbstract";

/**
 * valida si tiene datos sin grabar antes de salir de la pagina
 */
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateAbstract> {
  canDeactivate(component: CanDeactivateAbstract): boolean {
    if(!component.canDeactivate()){
      return confirm("Tienes cambios sin guardar. Desea salir y descartar los mismos?");
    }
    return true;
  }
}

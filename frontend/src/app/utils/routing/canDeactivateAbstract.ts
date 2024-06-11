import { HostListener, Directive } from "@angular/core";
import {FormGroup} from "@angular/forms";
import {OnDestroyMixin} from "@w11k/ngx-componentdestroyed";

/**
 * clase que define lo que debe tener una pagina para validar si puede salir o no.
 * esto es para avisar si tiene cambios sin guardar
 */
@Directive()
export abstract class CanDeactivateAbstract extends OnDestroyMixin{

  /**
   * formulario
   */
  abstract get form():FormGroup;

  //================ metodos ==============================

  /**
   * define si puede salir o no
   */
  canDeactivate(): boolean{
    return !this.form.dirty;
  }

  /**
   * evento por si cierra la solapa o browser
   * @param $event
   */
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate()) {
      $event.returnValue =true;
    }
  }
}

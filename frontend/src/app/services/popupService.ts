import {Injectable} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

import {ConfirmationPopup} from "@components/popups/confirmationPopup";
import {SelectPopup} from "@components/popups/selectPopup";


/**
 * Servicio de popups
 */
@Injectable()
export class PopupService {

  /**
   * constructor
   */
  constructor(private dialog: MatDialog) {
  }

  //===================== methods =================

  /**
   * muestra un popup generico de confirmación
   * @param text
   */
  showConfirmationPopup(text:string):MatDialogRef<ConfirmationPopup> {
    return this.dialog.open(ConfirmationPopup, {
      data: text,
      autoFocus:false //sin foco en ningun btn
    });
  }

  /**
   * muestra un popup con un select genérico
   * @param message El mensaje a mostrar
   * @param items Los items seleccionables
   */
  showSelectPopup(message:string, items: any[], selected: any):MatDialogRef<SelectPopup> {
    return this.dialog.open(SelectPopup, {
      data: {message: message, items: items, selected: selected},
      autoFocus:false //sin foco en ningun btn
    });
  }
  
  /**
  * cierra todos los popups
  */
  closeAll(){
    this.dialog.closeAll();
  }

}

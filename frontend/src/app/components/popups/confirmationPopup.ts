import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * popup de confirmacion
 * TODO, mejor seria pasar el metodo de accion al popup, y mantener el cargando mientras se procesa
 */
@Component({
  selector: 'confirmation-popup',
  styleUrls: ['./confirmationPopup.css'],
  templateUrl: './confirmationPopup.html'
})
export class ConfirmationPopup {

  /**
   * constructor
   * @param dialogRef
   * @param message
   */
  constructor(public dialogRef: MatDialogRef<ConfirmationPopup>,
              @Inject(MAT_DIALOG_DATA) public message: string) {
  }

  /**
   * onNotClick
   */
  onNotClick(): void {
    this.dialogRef.close();
  }

}

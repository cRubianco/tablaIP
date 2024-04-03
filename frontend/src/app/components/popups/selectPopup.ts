import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 *
 * popup para seleccionar un campo y retornar el valor
 */
@Component({
  selector: 'select-popup',
  templateUrl: 'selectPopup.html',
})
export class SelectPopup implements OnInit {

  form:FormGroup;//formulario de la seccion

  //================== constructor =======================

  /**
   * constructor
   * @param dialog
   * @param data
   * @param fb
   */
  constructor(private dialog: MatDialogRef<SelectPopup>, @Inject(MAT_DIALOG_DATA) public data: {message: string, items: any[][], selected: any}, private fb:FormBuilder) {
  }

  /**
   * inicia formulario
   */
  ngOnInit(): void {
    this.form=this.fb.group({
      item: [{value: this.data.selected, disabled: false}, [Validators.required]],
    });
  }

  //====================== metodos =======================

  /**
   * cancelar
   */
  cancel(): void {
    this.dialog.close();
  }

  /**
   * guardar
   */
  save(){
    this.dialog.close(this.form.value);
  }
}

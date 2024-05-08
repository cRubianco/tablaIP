import { AbstractControl, FormGroup } from "@angular/forms";

import { environment } from "src/environments/environment";

/**
 * utilidades varias
 */
 export class Utils {

   static lastColor:string; //se usa, para no repetir un color, en la funcion de color random

   /**
   * limpia un control de valor y validaciones
   * @param formControl
   */
   static cleanFormControl(formControl:AbstractControl):void {
    formControl.reset();
    formControl.clearValidators();
    formControl.updateValueAndValidity();
    formControl.markAsPristine();
  }

  /**
   * resetea el valor de un control
   * @param formControl
   */
  static resetFormControlValue(formControl:AbstractControl):void {
    formControl.reset();
    formControl.updateValueAndValidity();
    formControl.markAsPristine();
  }  

  /**
   * recupera el largo de un campo
   * @param form
   * @param field
   */
  static getFieldControlLength(form:FormGroup, field:string):number {
    let value;
    if (form && form.controls[field])
      value = form.controls[field].value;
    if (value) {
      if (typeof value === 'number')
        return (value as number).toString().length;
      else
        return value.length;
    } else
      return 0;
  }  
   
  /**
   * loguea errores de campos
   * @param form
   */
  static logValidationsForm(form:FormGroup){
    //common validators
    if (!environment.production) {//solo para desa
      Object.keys(form.controls).forEach(key => {
        const controlErrors = form.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('control: "' + key + '", error: "' + keyError + '", value: ', controlErrors[keyError]);
          });
        }
      });
    }
  }

}  
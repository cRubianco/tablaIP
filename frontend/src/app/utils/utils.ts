import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import {Constants} from "./constants";
import { environment } from "src/enviroments/enviroment";


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
        let tempKey = form.get(key)?.errors
        console.log('Linea 61 -->  ', tempKey);
        
        // const controlErrors: ValidationErrors = form.get(key)?.errors;
         const controlErrors = form.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('control: "' + key + '", error: "' + keyError + '", value: ', controlErrors[keyError]);
          });
        }
      });
    }
  }
  
 /**
   * elimina los puntos y convierte las comas en puntos
   * @param decimal
   * @return
   */
  static deserializeDecimal(decimal:any): number {
    return (decimal != null)
      ? decimal.replaceAll(Constants.CHARACTER_THOUSANDS_ES_AR, '')
        .replace(Constants.CHARACTER_DECIMAL_ES_AR, Constants.CHARACTER_DECIMAL_EN)
      : null;
  }

  /**
   * convierte los puntos decimales en comas, y agrega puntos como separadores de miles,
   * redondeando a fractionDigits decimales
   * @param decimal
   * @param fractionDigits
   * @return
   */
  static serializeDecimal(decimal: number, fractionDigits?: number): string {
    return (decimal != null)
      ? decimal.toFixed(fractionDigits || 2)
        .replace(Constants.CHARACTER_DECIMAL_EN, Constants.CHARACTER_DECIMAL_ES_AR)
        .replace(/\B(?=(\d{3})+(?!\d))/g, Constants.CHARACTER_THOUSANDS_ES_AR)
      : "";
  }

  /**
   * normaliza nro de tells para whatsapp
   * @param phone
   */
  static normalicePhone(phone:string):string {
    let normalized:string=phone.replace(/[- _+)(]/g,'');
    if (normalized.startsWith("15") && normalized.length==10)
      normalized="54911"+normalized.replace("15","");
    if (normalized.startsWith("11") && normalized.length==10)
      normalized="549"+normalized;
    //console.log("phone:"+phone+" normalized:"+normalized);
    return normalized;
  }

}  
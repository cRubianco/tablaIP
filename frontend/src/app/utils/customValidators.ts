import { AbstractControl, ValidationErrors } from "@angular/forms";

//patterns de validacion
const ALPHA_PATTERN:RegExp = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜÁÉÍÓÚÑáéíóúñ\s]*$/;
const ALPHA_SYMBOLS_PATTERN: RegExp = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ\s,ÁÉÍÓÚÑáéíóúñ."_(){}!¡¿?#@%&/+-]*$/;
const ALPHANUMERIC_PATTERN: RegExp = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ\s0-9,ÁÉÍÓÚÑáéíóúñ\.\-"_&#%]*$/;
const NUMERIC_PATTERN:RegExp = /^[0-9.-]*$/;

/**
 * validadores
 */
export const CustomValidators = {

  /**
   * validacion por letras y espacions
   * @param control
   */
  alpha(control: AbstractControl): ValidationErrors | null {
    if (control.value==null || ALPHA_PATTERN.test(control.value))
      return null;
    else
      return {"alpha":true, msg:"VALIDATOR_ALPHA"};
  },

  /**
   * validacion con letras, espacios y caracteres de puntuacion
   * @param control
   */
  alphaSymbols(control: AbstractControl): ValidationErrors | null {
    if (control.value==null || ALPHA_SYMBOLS_PATTERN.test(control.value))
      return null;
    else
      return {"alphaSymbols":true, msg:"VALIDATOR_ALPHA_SYMBOLS"};
  },

  /**
   * validacion por letras, espacios y numeros
   * @param control
   */
  alphanumeric(control: AbstractControl): ValidationErrors | null {
    if (control.value==null || ALPHANUMERIC_PATTERN.test(control.value))
      return null;
    else
      return {"alphanumeric":true, msg:"VALIDATOR_ALPHANUMERIC"};
  },


  
  /**
   * validacion por numeros
   * @param control
   */
  numeric(control: AbstractControl): ValidationErrors | null {
    if (control.value==null || NUMERIC_PATTERN.test(control.value))
      return null;
    else
      return {"numeric":true, msg:"VALIDATOR_NUMERIC"};
  },

};
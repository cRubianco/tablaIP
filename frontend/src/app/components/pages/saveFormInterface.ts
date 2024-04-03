import {FormGroup} from "@angular/forms";

/**
 * interface para formularios con btn save/cancel
 */
export interface SaveFormInterface {
  /**
   * formulario
   */
  form:FormGroup;
  /**
   * modo edicion
   */
  edit:boolean;
  /**
   * metodo save
   */
  save:()=>Promise<boolean>;
  /**
   * metodo cancel
   */
  cancel:()=>void;

}
import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";
import {I18nService} from "@services/i18nService";

@Component({
  selector: 'form-select-field',
  templateUrl: 'formSelectFieldComponent.html',
  viewProviders:[{provide:ControlContainer, useExisting:FormGroupDirective}] //permite ver el formgroupp
})
export class FormSelectFieldComponent {

  @Input() name:string; //nombre campo
  @Input() form:FormGroup; //formulario
  @Input() controlName:string; //nombre form control
  @Input() required:boolean=false; //si es requerido
  @Input() options:any[]; //opciones
  @Input() multiple:boolean=false; //si acepta seleccion multiple
  @Input() nullOptionText:string="Seleccione una opción";

  @Input() getOptionValue: (item:any)=>string|object; //funcion para recuperar key
  @Input() getOptionText:(item:any)=>string; //devuelve el texto.
  @Input() compareFn:(item1:object, item2:object)=>boolean; //funcion para comparar cuando el value es un objeto


  //================ constructor ===================
  /**
   * constructor
   * @param i18nService
   */
  constructor(public i18nService:I18nService){
  }

  //=================== metodos ==========================

  /**
   * funcion para compara id en el select
   * @param item1
   * @param item2
   */
  compareDefault(item1:any, item2:any) {
      return item1==item2;
  }

  /**
   * TODO mejora, cuando se elimine el metodo getOption user directamente getOptionValue en html
   * @param item
   */
  getValue(item:any):any{
    if (this.getOptionValue)
      return this.getOptionValue(item);
    else
      return this.getOption(item,1);
  }

  /**
   * TODO mejora, cuando se elimine el metodo getOption user directamente getOptionText en html
   * @param item
   */
  getText(item:any):any{
    if (this.getOptionText)
      return this.getOptionText(item);
    else
      return this.getOption(item,0);
  }

  /**
   * recupera una opcion del combo
   * @param item
   * @param data
   * TODO mejora, sacar este metodo y definir en todos los select la funcion correcta
   */
  private getOption(item:any,data:number){
    //valido si me viene un array text clave o un solo campo
    let option=typeof item=="object"?item[data]:item;
    if (typeof option=="object") option=item[0];//caso parameterService.technologies
    return option;
  }
}

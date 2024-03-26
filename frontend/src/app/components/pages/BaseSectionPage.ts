import { Directive, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { CanDeactivateAbstract } from "@utils/routing/canDeactivateAbstract";
import { UtilServices } from "@services/utilServices";

/**
 * componente abstracto que representa una seccion en un formulario complejo
 */
@Directive()
export abstract class BaseSectionPage extends CanDeactivateAbstract implements OnInit {

  /**
   * formulario
   */
  form: FormGroup; //formulario padre
  /**
   * dto
   */
  readonly data: any; //dato para inicializar formulario
  /**
   * modo edicion?
   */
  edit:boolean;
  /**
   * panel step
   */
  currentStep:number=0;

  //====================== constructor ===================

  /**
   * constructor
   */
  protected constructor(protected fb:FormBuilder, protected utilService: UtilServices) {
    super();
    const state = this.utilService.getState();
    if (state) { // view or edit 
      this.edit = this.utilService.getState().edit;
    } else {     // new
      this.edit = true;
      this.data = {};
    }  
  }

  ngOnInit(): void {
    //create reactive form
    this.form = this.fb.group({});
  }

  //================== metodos ============================

  /**
   * setStep
   * @param toStep
   */
  setStep(toStep:number):void {
    this.currentStep=toStep;
  }

}
import {Component, Input, OnInit} from '@angular/core';
import {SaveFormInterface} from "../pages/saveFormInterface";

@Component({
  selector: 'form-save-field',
  templateUrl: 'formSaveComponent.html'
})
export class FormSaveComponent implements OnInit{

  /**
   * indica si el formulario esta en edicion o no
   */
  @Input() page:SaveFormInterface;
  /**
   * indica si la pagina viene de una redireccion
   */
  @Input() redirect:boolean=false;
  /**
   * puede editar?, si no se especifica nada, puede editar
   */
  @Input() canEdit:boolean=true

  //=============== constructor ============================

  constructor(){
  }

  ngOnInit(): void {
    if (!this.page) throw new Error("Page attribute can not be null !!!");
  }

  //================ metodos ==============================

  /**
   * guardar
   */
  save():Promise<any> {
    return this.page.save().then(ok=>{
      if (ok) this.page.form.markAsPristine();
    })
  }

  /**
   * cancelar
   */
  cancel(){
    this.page.form.markAsPristine();
    this.page.cancel();
  }

  /**
   * cierro ventana
   */
  close(){
    this.page.form.markAsPristine();
    window.close();
  }

  /**
   * pasa a modo edicion
   */
  edit(){
    this.page.edit=true;
    this.page.form.enable();
  }
}

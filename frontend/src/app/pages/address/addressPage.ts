import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";

import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

import { Address } from "@model/address";
import { SaveFormInterface } from "@components/pages/saveFormInterface";
import { AddressService } from "@services/addressesService";
import { I18nService } from "@services/i18nService";
import { ParametersService } from "@services/parameterService";
import { UtilServices } from "@services/utilServices";
import { Utils } from "@utils/utils";
import { CustomValidators } from "@utils/customValidators";
import { CanDeactivateAbstract } from "@utils/routing/canDeactivateAbstract";
import { Constants } from "@utils/constants";

/**
 * Pagina detalle de la dirección IP
 */
@Component({
  selector: 'address-page',
  templateUrl: './addressPage.html',
  styleUrls: ['./addressPage.css']
})
export class AddressPage extends CanDeactivateAbstract implements OnInit, SaveFormInterface {

  // displayedColumns: string[] = ['nro', 'address', 'group', 'address', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other'];

  readonly Utils=Utils;
  form: FormGroup; //formulario
  readonly address: Address[]; //dto
  edit:boolean; //modo edicion?
  readonly newAddress:boolean; //flag si es nuevo
  data: any;  // dato para inicilizar el formulario
  
  filteredAddress: Observable<Address[]>;
  public searchKeyUp = new Subject<KeyboardEvent>();
  
  inputCtrl:FormControl=new FormControl(); //input del autocomplete
  @ViewChild('input') input: ElementRef<HTMLInputElement>; //html input

  //================= constructor =================

  /**
   * constructor
   */
  constructor(private fb:FormBuilder, public parametersService:ParametersService,
              public i18nService:I18nService, private utilService: UtilServices, private addressService: AddressService,
              ) {
    super();
    
    //chequeo si estoy editando o no
    const state = this.utilService.getState();
    if (state) {  //view or edit
      this.data = state.data.data;
      this.edit = this.utilService.getState().edit;
      this.newAddress=false;
    } else { //new
      this.newAddress=true;
      this.edit=true;
      this.data={};
    }
  }

  /**
   * on init
   */
  ngOnInit(): void {
    //create reactive form
    this.form = this.fb.group({
      nro: [{value: null, disabled: !this.newAddress }, [Validators.required, CustomValidators.numeric]],
      address: [{value: null, disabled: !this.edit }, [Validators.required, CustomValidators.ipAddress]],
      group: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      user: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      pcname: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alphanumeric]],
      dependency: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      opersystem: [{value: null, disabled: !this.edit}, [Validators.maxLength(50), CustomValidators.alphanumeric]],
      observ: [{value: null, disabled: !this.edit}, [Validators.maxLength(50), CustomValidators.alphanumeric]],
      type: [{value: null, disabled: !this.edit}, [Validators.required, CustomValidators.alpha]],
      other: [{value: null, disabled: !this.edit}, [CustomValidators.alphanumeric]],
    });
    //set initials values
    if (this.data != null) {
      Object.keys(this.data).forEach(name => {
        if (this.form.controls[name]) {
          this.form.controls[name].patchValue(this.data[name], {onlySelf: true});
        }
      });
    }
  }

  //==================== Metodos =====================
  /**
   * dirección seleccionada, recupero datos y los paso al formulario
   * @param event
   */
  addressSelected(event:MatAutocompleteSelectedEvent):void{
    let address=event.option.value;
    // ['nro', 'address', 'group', 'user', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other'];
    this.form.controls["nro"].patchValue( address.nro, {onlySelf: true});
    this.form.controls["address"].patchValue( address.address, {onlySelf: true});
    this.form.controls["group"].patchValue( address.group, {onlySelf: true});
    this.form.controls["user"].patchValue( address.user, {onlySelf: true});
    this.form.controls["pcname"].patchValue( address.pcname, {onlySelf: true});
    this.form.controls["dependency"].patchValue( address.dependency, {onlySelf: true});
    this.form.controls["opersystem"].patchValue( address.opersystem, {onlySelf: true});
    this.form.controls["observ"].patchValue( address.observ, {onlySelf: true});
    this.form.controls["type"].patchValue( address.type, {onlySelf: true});
    this.form.controls["other"].patchValue( address.other, {onlySelf: true});
  }

  /**
   * displayAddress
   * @param address
   */
  displayAddress(address?: Address): string  {
    if (address) {
      return (typeof address === "string") ? address : address.address;
    } else {
      return '';
    }
  }

  /**
   * evento al cerrar autocomplete
   */
  closeAddress(){   
    if (typeof this.form.controls["address"].value === "string") {
      this.form.controls["nro"].patchValue(null);
      this.form.controls["address"].patchValue(null);
      this.form.controls["group"].patchValue( null, {onlySelf: true});
      this.form.controls["user"].patchValue( null, {onlySelf: true});
      this.form.controls["pcname"].patchValue( null, {onlySelf: true});
      this.form.controls["dependency"].patchValue( null, {onlySelf: true});
      this.form.controls["opersystem"].patchValue( null, {onlySelf: true});
      this.form.controls["observ"].patchValue( null, {onlySelf: true});
      this.form.controls["type"].patchValue( null, {onlySelf: true});
      this.form.controls["other"].patchValue( null, {onlySelf: true});
    }
  }

  /**
   * evento onblur
   */
  checkAddress(){
    if (typeof this.form.controls["address"].value === "string")
      this.form.controls["address"].patchValue(null);
  }

  /**
   * save address
   */
  save():Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.form.invalid) {
        Utils.logValidationsForm(this.form);
        this.utilService.showSnack("Para realizar esta operación, debe completar correctamente todos los campos.");
        resolve(false);
        return;
      }
      //pasos los datos al dto
      Object.keys(this.form.value).forEach(addr => {
        this.data[addr]=this.form.value[addr];
      });
      this.addressService.saveAddress(this.data)
      .subscribe(
        next => { this.utilService.navigate(Constants.URL.ADDRESSES )},
        err => { console.log('Error create address', err) }, 
      ) 
    })
  }   
  
  /**
   * cancel
   */
  cancel() {
    this.utilService.navigate(Constants.URL.ADDRESSES);
  }

  onBlur() {
    this.input.nativeElement.value = '';
  }

}

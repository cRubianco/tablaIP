import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged, EMPTY, mergeMap, Observable, Subject } from "rxjs";

import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

import { untilComponentDestroyed } from "@w11k/ngx-componentdestroyed";
import { Addresses } from "@model/addresses";
import { SaveFormInterface } from "@components/pages/saveFormInterface";
import { AddressesService } from "@services/addressesService";
import { I18nService } from "@services/i18nService";
import { ParametersService } from "@services/parameterService";
import { UtilServices } from "@services/utilServices";
import { Utils } from "@utils/utils";
import { CustomValidators } from "@utils/customValidators";
import { CanDeactivateAbstract } from "@utils/routing/canDeactivateAbstract";
import { Constants } from "@utils/constants";


 
  // readonly pageName="Address";
  // displayedColumns: string[] = ['nro', 'address', 'group', 'address', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other'];
  // readonly dataSource:MatTableDataSource<Addresses> = new MatTableDataSource<Addresses>(); //dataSource


/**
 * Pagina detalle de la dirección IP
 */
@Component({
  selector: 'address-page',
  templateUrl: './addressPage.html',
  styleUrls: ['./addressPage.css']
})
export class AddressPage extends CanDeactivateAbstract implements OnInit, SaveFormInterface {
  readonly Utils=Utils;
  form: FormGroup; //formulario
  readonly addr: Partial<Addresses>; //dto
  edit:boolean; //modo edicion?
  readonly new:boolean; //flag si es nuevo
  filteredAddress: Observable<Addresses[]>;
  public searchKeyUp = new Subject<KeyboardEvent>();
  
  //campos para busqueda cliente
  // filteredClients: Client[]=[]; //clientes filtrados por autocomplete
  // clientsCtrl:FormArray=this.fb.array( []); //lista de clientes seleccionados
  
  // inputCtrl:FormControl=new FormControl(); //input del autocomplete
  @ViewChild('input') input: ElementRef<HTMLInputElement>; //html input


  //================= constructor =================

  /**
   * constructor
   */
  constructor(private fb:FormBuilder, public parametersService:ParametersService,
              public i18nService:I18nService, private utilsService: UtilServices, private addressService: AddressesService,
              ) {
    super();
    //chequeo si estoy editando o no
    const state = this.utilsService.getState();
    if (state) {  //view or edit
      this.addr = state.data;
      this.edit = this.utilsService.getState().edit;
      this.new=false;
    } else { //new
      this.new=true;
      this.edit=true;
      this.addr={};
    }
  }

  /**
   * on init
   */
  ngOnInit(): void {
    //create reactive form
    this.form = this.fb.group({
      nro: [{value: null, disabled: !this.new }, [Validators.required]],
      address: [{value: null, disabled: !this.new }, [Validators.required, CustomValidators.alphanumeric]],
      group: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      user: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      pcname: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      dependency: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      opersystem: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      observ: [{value: null, disabled: !this.edit}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      type: [{value: null, disabled: !this.edit}, [Validators.required, CustomValidators.alpha]],
      other: [{value: null, disabled: !this.edit}, [Validators.required, CustomValidators.alpha]],
    });
    //set initials values
    if (this.addr != null) {
      Object.keys(this.addr).forEach(data => {
        if (this.form.controls[data]) {
          this.form.controls[data].patchValue(this.addr[data as keyof Addresses], {onlySelf: true});
        }
      });
      //busqueda de usuarios
      // this.filteredAddress = this.searchKeyUp.pipe(
        // untilComponentDestroyed(this),
        // debounceTime(300),
        // distinctUntilChanged(),
        // mergeMap(() => {
        //   const control=this.form.controls["address"].value;
        //   return this.filteredAddress((typeof control === "string" || control==null) ? control : control.address);
        // }));
    }
  }

  //==================== Metodos =====================

  /**
   * usuario seleccionaro, recupero datos y los paso al formulario
   * @param event
   */
  addressSelected(event:MatAutocompleteSelectedEvent):void{
    let address=event.option.value;
    console.log('addPage 130 --> ',address);
    
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
// ['nro', 'address', 'group', 'user', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other'];


  /**
   * displayAddress
   * @param address
   */
  displayAddress(address?: Addresses): string  {
    if (address) {
    console.log('--> ',address);
    
      return (typeof address === "string") ? address : address.address;
    } else {
      return '';
    }
  }

  /**
   * evento al cerrar autocomplete
   */
  closeAddress(){
    console.log('closeAddress ', this.addr);
    
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
        this.utilsService.showSnack("Para realizar esta operación, debe completar correctamente todos los campos.");
        resolve(false);
        return;
      }

      //pasos los datosl al dto
      Object.keys(this.form.value).forEach(address => {
        console.log('180  ----->  '+address);
        console.log('180  ----->  '+this.form.value[address]);
        
        // this.address[address]=this.form.value[address];
      });

      if (this.form.value["address"]) //si esta editando uno que existe, como esta deshabilitado da null
        this.addr.address=this.form.value["address"].address;//sobreescribo el nick, porque en el form puede ser un objeto
      //save
      // this.addressService.save(this.address).then((response)=>{
      //   if (response.status==200) {
      //     resolve(true);
      //     this.utilsService.navigate(Constants.URL.ADDRESS);
      //   } else
      //     resolve(false);
      // });
    });
  }

  /**
   * cancel
   */
  cancel(){
    this.utilsService.navigate(Constants.URL.ADDRESSES);
  }

  onBlur(){
    this.input.nativeElement.value = '';
  }

}

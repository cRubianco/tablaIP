import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';

import { Addresses } from '@model/addresses';
import { AddressesService } from '@services/addressesService';
import { BaseSectionPage } from '@components/pages/BaseSectionPage';
import { UtilServices } from '@services/utilServices';
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-addresses',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css']
})

export class AddressesPage extends BaseSectionPage implements OnInit {

  displayedColumns: string[] = ['nro', 'address', 'group', 'user', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other', 'edit'];
  dataSource = new MatTableDataSource<Addresses>; //datasource
  title: string = "Direcciones IP"

    /**
   * flag que marca si es una duplicacion
   */
    duplicate: boolean=false;

  //================= constructor =================
  /**
   * constructor
   */
  constructor(fb: FormBuilder, private addressesService: AddressesService, protected utilsService: UtilServices) {
    super(fb, utilsService);
    const state = this.utilsService.getState();
    this.duplicate=state && state.duplicate;
  }

  getTitle() {
    return this.title;
  }

  ngAfterViewChecked(): void {
    
  }
  
  override ngOnInit(): void {
    // super.ngOnInit();
  //   if (this.duplicate) this.form.markAsDirty();
    this.getAddresses()
  }; 

  //==================== Metodos =====================
  clickedRows = new Set<Addresses[]>();

  getAddresses() {
    this.addressesService.getAddresses().subscribe({
      next: res => {
        this.dataSource.data = res;
      },
      error: err => console.log(err)
    })
    
  }

  editAddress(address: Addresses, event: { stopPropagation: () => void; }) {
    event.stopPropagation();
    this.addressesService.getAddress(address)
    .subscribe(
      result => {
        this.utilsService.navigate(Constants.URL.ADDRESS, { edit: true, data: result })
      }
    );
      // {
      // next: res => {
      //   if (res._id) {
      //       console.log("id IP address:  ", address._id);
      //       this.utilsService.navigate(Constants.URL.ADDRESS, { edit: true, data: res })
      //     }
      //   }
    // }
    //   if (result.status == 200)
    //     this.utilService.navigate(Constants.URL.ADDRESS, { edit: true, data: result.data });
    // })
      
  }

  /**
   * agregar dirección IP
   */
  addAddress():void{
    this.utilService.navigate(Constants.URL.ADDRESS);
 }

  // filtrar(event: Event) {
  //   const filtro = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filtro.trim();
  // }

  /**
  * cancel
  */
  cancel(){
    this.utilsService.navigate(Constants.URL.ADDRESSES);
  }
  
}
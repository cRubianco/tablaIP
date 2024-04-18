import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Address } from '@model/address';
import { BaseSectionPage } from '@components/pages/BaseSectionPage';
import { AddressService } from '@services/addressesService';
import { UtilServices } from '@services/utilServices';
import { PopupService } from '@services/popupService';
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-addresses',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css']
})

export class AddressesPage extends BaseSectionPage implements OnInit {

  displayedColumns: string[] = ['nro', 'address', 'group', 'user', 'pcname', 'dependency', 'opersystem', 'observ', 'type', 'other', 'acciones'];
  dataSource = new MatTableDataSource<Address>; //datasource
  title: string = "Direcciones IP"

  clickedRows = new Set<Address[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
   * flag que marca si es una duplicacion
   */
    duplicate: boolean=false;

  //================= constructor =================
  /**
   * constructor
   */
  constructor(fb: FormBuilder, private addressesService: AddressService, utilService: UtilServices,
              private popupService: PopupService ) {
    super(fb, utilService);
    const state = this.utilService.getState();
    this.duplicate=state && state.duplicate;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewChecked(): void {
  }
  
  override ngOnInit(): void {
    this.getAddresses()
  }; 

  //==================== Metodos =====================

  getTitle() {
    return this.title;
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  getAddresses() {
    this.addressesService.getAddresses().subscribe({
      next: res => {
        this.dataSource.data = res;
      },
      error: err => console.log(err)
    })
  }

  editAddress(id: string) {
    const addToModify = this.addressesService.getAddress(id)
    .subscribe( res => {
      if (res) {
          const text: string = `¿confirma los cambios realizados a la dirección IP ?`;
          this.utilService.navigate(Constants.URL.ADDRESS, { edit: true, data: res })
      } 
    });
  }

  deleteAddress(id: string) {
    const text: string = `¿Está seguro que desea borrar la dirección IP ?`;
    this.popupService.showConfirmationPopup(text).afterClosed()
      .pipe(untilComponentDestroyed(this))
      .subscribe(res => {
        if (res) {
          this.addressesService.deleteAddress(id)
        } else {
          this.cancel();
        }
      })
  }

  /**
   * agregar dirección IP
   */
  addAddress():void{
    this.utilService.navigate(Constants.URL.ADDRESS);
 }

  /**
  * cancel
  */
  cancel(){
    this.utilService.navigate(Constants.URL.ADDRESSES);
  }
  
}
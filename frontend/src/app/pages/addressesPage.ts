import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Addresses } from '@model/addresses';
import { AddressesService } from '@services/addressesService';

@Component({
  selector: 'app-addresses',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css']
})

export class AddressesPage implements OnInit {

  displayedColumns: string[] = ['nro', 'address', 'group', 'user', 'pcname', 'dependencies', 'opersystem', 'observ', 'type', 'other'];
  dataSource = new MatTableDataSource<Addresses>; //datasource

  //================= constructor =================
  /**
   * constructor
   */
  constructor(private addressesService: AddressesService) { }
  
  
  ngOnInit(): void {
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

  cancel() {

  }

  save() {

  }
  
}
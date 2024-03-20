import { Component, OnInit } from '@angular/core';
import { AddressesService } from '@services/addressesService';
import { UtilServices } from '@services/utilServices';

@Component({
  selector: 'app-addresses',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css']
})

export class AddressesPage implements OnInit {
// { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } 
  // displayedColumns: string[] = ['Nro.', 'Dirección', 'Grupo', 'Usuario', 'Nomb.PC', 'Dependencia', 'Sis.Oper', 'Observaciones', 'Tipo', 'Otros'];
  displayedColumns: string[] = ['nro', 'address', 'group', 'user', 'pcname', 'dependencies', 'opersystem', 'observ', 'type', 'other'];
  
  //================= constructor =================
  /**
   * constructor
   */
  constructor(private addressesService: AddressesService) { }
  
  
  ngOnInit(): void {
    this.addressesService.getAddresses().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }; 


  //==================== Metodos =====================



}
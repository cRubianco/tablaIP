import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddressesService } from '@services/addressesService';
import { UtilService } from '@services/utilService';
import { environment } from 'src/enviroments/enviroment';

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
  constructor(private addressesService: AddressesService, protected utilsService: UtilService) { }
  
  
  ngOnInit(): void {
    this.addressesService.getAddresses().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }; 


  //==================== Metodos =====================



}
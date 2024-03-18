import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilService } from '@services/utilService';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-addresses',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css']
})

export class AddressesPage implements OnInit {

   //================= constructor =================
  /**
   * constructor
   */
  constructor(protected fb:FormBuilder, protected utilsService: UtilService) { }
  
  
  ngOnInit(): void {
    
  }


  //==================== Metodos =====================

  
}
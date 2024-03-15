import {Component, OnInit} from '@angular/core';
import {AuthService} from "@services/authService";
import {UtilService} from "@services/utilService";
import {Constants} from "@utils/constants";

/**
 * Pagina de login
 */
@Component({
  selector: 'loading-page',
  templateUrl: './loadingPage.html',
  styleUrls: ['./loadingPage.css']
})
export class LoadingPage implements OnInit{

  private readonly state;

  //=================== Constructor =====================
  /**
   * constructor
   * @param utilService
   */
  constructor(private utilService:UtilService) {
    this.state = utilService.getState();//datos si accedo por link directo
  }

  /**
   * init
   */
  ngOnInit(): void {
    this.load();
  }

  //================== metodos  ===================

  /**
   * load
   */
  private load():void{

  }

}

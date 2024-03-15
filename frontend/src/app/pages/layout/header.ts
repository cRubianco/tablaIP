import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Animations } from "@components/animations";

import { UtilService } from "@services/utilService";
import { Constants } from '@utils/constants';
import { OnDestroyMixin } from "@w11k/ngx-componentdestroyed";


/**
 * barra del header
 */
@Component({
  selector: 'layout-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  animations: [Animations.shake]
})
export class Header extends OnDestroyMixin implements OnInit {

  /**
   * barra latera
   */
  @Input() sidenav: MatSidenav;

  /**
   * constructor
   * @param utilService
   */
  constructor( 
    private utilService: UtilService) {
    super();
  }

  /**
   * init
   */
  ngOnInit() {
  }

  //======================== metodos ======================

  /**
   * mostrar  / ocultar la barra
   */
  toggleSideBar(): void {
    this.sidenav.toggle().then();
  }

  /**
   * salir
   */
  async logout() {
    await this.utilService.navigate(Constants.URL.DASHBOARD);
    window.location.reload();
  };

}
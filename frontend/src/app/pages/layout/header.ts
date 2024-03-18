import { Component, Input, OnInit } from '@angular/core';
import { OnDestroyMixin } from "@w11k/ngx-componentdestroyed";
import { MatSidenav } from '@angular/material/sidenav';

import { UtilService } from "@services/utilService";
import { Animations } from "@components/animations";
import { Constants } from '@utils/constants';


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
  constructor(private utilService: UtilService) {
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
    this.utilService.navigate(Constants.URL.LOGIN);
    window.location.reload();
  };

}
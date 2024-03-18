import { Component, Input, OnInit } from '@angular/core';
import { OnDestroyMixin } from "@w11k/ngx-componentdestroyed";
import { MatSidenav } from '@angular/material/sidenav';

import { Animations } from "@components/animations";


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
  constructor() {
    super();
  }

  /**
   * init
   */
  ngOnInit() {
  }

}
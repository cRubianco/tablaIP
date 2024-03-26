import { Component, Input, OnInit } from '@angular/core';
import { OnDestroyMixin } from "@w11k/ngx-componentdestroyed";
import { MatSidenav } from '@angular/material/sidenav';

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

  title: string = Constants.TITLE;

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

  getTitle() {
    return this.title;
  }

}
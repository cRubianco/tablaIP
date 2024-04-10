import {Component, HostListener} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

import {OnDestroyMixin, untilComponentDestroyed,} from '@w11k/ngx-componentdestroyed';
import { IconRegistry } from '@utils/iconRegistry';
import { Constants } from '@utils/constants';
import { MatDialog } from '@angular/material/dialog';
import { AddressPage } from '@pages/address/addressPage';
import { Address } from '@model/address';

/**
 * Pagina base y layout
 */
@Component({
  selector: 'app-root',
  templateUrl: './basePage.html',
  styleUrls: ['./basePage.css'],
})
export class BasePage extends OnDestroyMixin {
  title: string = Constants.SUB_TITLE;
  screenWidth: number;
  address!: Address;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
              private dialog: MatDialog) {
      super();
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
    };
    IconRegistry.registryCustomIcons(matIconRegistry,domSanitizer);
  }

  getTitle() {
    return this.title;
  }
  
  sidenavOpened(): boolean {
    return this.screenWidth > 840;
  }
  
  newAddress() {
    const dialogRef = this.dialog.open(AddressPage);
    

    dialogRef.afterClosed().subscribe(res => {
      console.log('the dialog after closed ');
      this.address = res;
      
    })
  }
}

import {Component, HostListener} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {OnDestroyMixin, untilComponentDestroyed,} from '@w11k/ngx-componentdestroyed';
import {MatIconRegistry} from "@angular/material/icon";

import { UtilService } from '@services/utilService';
import { IconRegistry } from '@utils/iconRegistry';

/**
 * Pagina base y layout
 */
@Component({
  selector: 'app-root',
  templateUrl: './basePage.html',
  styleUrls: ['./basePage.css'],
})
export class BasePage extends OnDestroyMixin {
  screenWidth: number;

  constructor(private utilService: UtilService, private matIconRegistry: MatIconRegistry, 
      private domSanitizer: DomSanitizer ) {
      super();
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
    };
    IconRegistry.registryCustomIcons(matIconRegistry,domSanitizer);
  }

  sidenavOpened(): boolean {
    return this.screenWidth > 840;
  }
  // sidenavOpened(): boolean {
  //   return this.authService.getRole() != null && this.screenWidth > 840;
  // }
  
}

import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';

import { IconRegistry } from './utils/iconRegistry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnDestroyMixin {
  title = 'frontend';
  screenWidth: number;

  constructor(
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    super();
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
    };
    IconRegistry.registryCustomIcons(matIconRegistry,domSanitizer);
  }
}

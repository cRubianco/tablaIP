import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UtilService } from './services/utilService';
import { I18nService } from './services/i18nService';
import { AddressesService } from '@services/addressesService';



/**
 * modulo de servicios
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers:[
    // {
      // provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true
    // },
    // servicios utilidades
    UtilService, I18nService, AddressesService,
  
    // servicios navegacione
    // DirectAccessGuard, CanDeactivateGuard, DirectAccessAllow,
  ]
})
export class ServicesModule { }

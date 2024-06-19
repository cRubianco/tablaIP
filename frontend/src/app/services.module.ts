import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UtilServices } from './services/utilServices';
import { I18nService } from './services/i18nService';
import { AddressService } from '@services/addressesService';
import { ParametersService } from '@services/parameterService';
import { DirectAccessGuard } from '@utils/routing/directAccessGuard';
import { CanDeactivateGuard } from '@utils/routing/canDeactivateGuard';
import { DirectAccessAllow } from '@utils/routing/directAccessAllow';
import { PopupService } from '@services/popupService';
import { AuthService } from '@services/authService';



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
    // Servicio authorización
    AuthService,
    
    // servicios utilidades
    UtilServices, I18nService, AddressService, ParametersService, PopupService,
  
    // servicios navegación
    DirectAccessGuard, CanDeactivateGuard, DirectAccessAllow,
  ]
})
export class ServicesModule { }

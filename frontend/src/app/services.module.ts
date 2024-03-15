import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilService } from '@services/utilService';
import { ApiHttpInterceptor } from '@utils/apiHttpInterceptor';



@NgModule({
  imports: [
    MatSnackBarModule
  ],
  declarations: [
  ],
  providers:[{
      provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true
    },
    // servicios utilidades
    UtilService,
  ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatCardModule} from "@angular/material/card";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatPaginatorIntlES } from '@utils/matPaginatorIntlES';

// import {MatPaginatorIntlES} from "@utils/matPaginatorIntlES";

/**
 * lista de modulos de angular material
 */
const modules=[
  BrowserAnimationsModule, //angular material animation module
  FlexLayoutModule, //flex
  FormsModule,
  //componentes angular material
  MatToolbarModule, MatIconModule,
  MatDialogModule, MatSidenavModule, MatCardModule,
  MatPaginatorModule,
  //   MatListModule, MatProgressBarModule, 
  //  MatButtonModule, MatExpansionModule, MatSelectModule, MatTooltipModule, MatProgressSpinnerModule,
  //  MatFormFieldModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule,
  // MatTableModule,  MatSortModule, MatDatepickerModule, MatMomentDateModule, MatRadioModule,
  // MatTabsModule, DragDropModule, MatSlideToggleModule, MatChipsModule, MatBadgeModule, 
  // MatMenuModule, MatNativeDateModule,
  //angular material cdk
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ], 
  exports: [
    modules
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-AR'}, //locale fechas
    FormGroupDirective,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {minWidth: "50%", hasBackdrop:true}},    //popups
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlES}, //locale tablas
  ]
})

export class MaterialModule { }
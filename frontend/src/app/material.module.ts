import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatPaginatorIntlES } from '@utils/matPaginatorIntlES';
import { MatSelectModule } from '@angular/material/select';

/**
 * lista de modulos de angular material
 */
const modules=[
  BrowserAnimationsModule, //angular material animation module
  FlexLayoutModule, //flex
  FormsModule,
  //componentes angular material
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatProgressBarModule,
  MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTooltipModule, 
  
  //   MatListModule,  
  //   MatExpansionModule,  MatProgressSpinnerModule,
  //    MatCheckboxModule, 
  //   MatSortModule, MatDatepickerModule, MatMomentDateModule, MatRadioModule,
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
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    FormGroupDirective,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {minWidth: "50%", hasBackdrop:true}},    //popups
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlES}, //locale tablas
  ]
})

export class MaterialModule { }
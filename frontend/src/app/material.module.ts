import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";


/**
 * lista de modulos de angular material
 */
const modules=[
  BrowserAnimationsModule, //angular material animation module
  FlexLayoutModule, //flex
  //componentes angular material
  MatToolbarModule, MatIconModule,
  // MatSidenavModule,  MatListModule, MatProgressBarModule, MatCardModule,
  // MatDialogModule, MatButtonModule, MatExpansionModule, MatSelectModule, MatTooltipModule, MatProgressSpinnerModule,
  // FormsModule, MatFormFieldModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule,
  // MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatMomentDateModule, MatRadioModule,
  // MatTabsModule, DragDropModule, MatSlideToggleModule, MatChipsModule, MatBadgeModule, MatMenuModule, MatNativeDateModule,
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
})


export class MaterialModule { }
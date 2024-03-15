import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from "@angular/material/toolbar";


/**
 * lista de modulos de angular material
 */
const modules=[
  // BrowserAnimationsModule, //angular material animation module
  // FlexLayoutModule, //flex
  //componentes angular material
  MatIconModule, MatToolbarModule,
  // MatSidenavModule, , , MatListModule, MatProgressBarModule, MatCardModule,
  // MatDialogModule, MatButtonModule, MatExpansionModule, MatSelectModule, MatTooltipModule, MatProgressSpinnerModule,
  // MatFormFieldModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule,
  // MatTableModule, MatPaginatorModule, MatSortModule, MatDatepickerModule, MatMomentDateModule, MatRadioModule,
  // MatTabsModule, DragDropModule, MatSlideToggleModule, MatChipsModule, MatBadgeModule, MatMenuModule, MatNativeDateModule,
  // //angular material cdk
  FormsModule
];

/**
 * Modulo angular material
 */
@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ],
  providers: [

  ]
})
export class MaterialModule { }

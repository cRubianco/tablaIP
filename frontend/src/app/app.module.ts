import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ServicesModule } from './services.module';
import { BasePage } from '@pages/layout/basePage';
import { Footer } from '@pages/layout/footer';
import { Header } from '@pages/layout/header';
import { AddressesPage } from '@pages/addressesPage';
import { AddressPage } from '@pages/address/addressPage';
import { ImageButtonComponent } from '@components/buttons/imageButtonComponent';
import { SubmitButtonComponent } from '@components/buttons/submitButtonComponent';
import { ConfirmationPopup } from '@components/popups/confirmationPopup';
import { SelectPopup } from '@components/popups/selectPopup';
import { FormRowComponent } from '@components/forms/formRowComponent';
import { FormSelectFieldComponent } from '@components/forms/formSelectFieldComponent';
import { FormSaveComponent } from '@components/forms/formSaveComponent';
import { FormFieldComponent } from '@components/forms/formFieldComponent';
import { DashboardPage } from '@pages/dashboard';

export function initializeApp() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return ()=>{};
}

@NgModule({
  declarations: [
    AppComponent, DashboardPage,
    // --- Components ---
    ImageButtonComponent, SubmitButtonComponent,
    // --- pages ---
    BasePage, Footer, Header,
    AddressPage, AddressesPage,
    //--- popups comunes ----
    ConfirmationPopup, SelectPopup,
    // ------ forms -----------
    FormFieldComponent, FormRowComponent, FormSaveComponent, FormSelectFieldComponent, 
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //modulo http
    MaterialModule,
    ReactiveFormsModule, //modulo formularios reactivos
    ServicesModule, //modulo servicios

  ],
  providers: [
    {provide: APP_INITIALIZER,useFactory: initializeApp, multi: true},
    DatePipe
  ],
  bootstrap: [DashboardPage]
})
export class AppModule { }

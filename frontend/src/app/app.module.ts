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

export function initializeApp() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return ()=>{};
}

@NgModule({
  declarations: [
    AppComponent,
    // --- pages ---
    BasePage, Footer, Header,
    AddressesPage,
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
  bootstrap: [BasePage]
})
export class AppModule { }

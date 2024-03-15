import { DatePipe } from "@angular/common";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { RoutingModule } from "./routing.module";
import { ServicesModule } from "./services.module";
import { BrowserModule } from "@angular/platform-browser";
import { BasePage } from "@pages/layout/basePage";
import { Footer } from "@pages/layout/footer";
import { Header } from "@pages/layout/header";
import { SafePipe } from "./pipes/SafePipe";
import { UpperCaseDirective } from "@directives/UpperCaseDirective";
import { AddressesPage } from "@pages/addressesPage";

export function initializeApp() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return ()=>{};
}

@NgModule({
  declarations: [
    //--- pipes ---
    SafePipe,
    //--- directivas ---
    UpperCaseDirective,
    BasePage, Footer, Header, 
    //------ components ----
    AppComponent,
    AddressesPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, //modulo http
    RoutingModule,
    MaterialModule,
    ServicesModule, //modulo servicios
  ],
  providers: [
    {provide: APP_INITIALIZER,useFactory: initializeApp, multi: true},
    DatePipe
  ],
  bootstrap: [BasePage]
})
export class AppModule { }
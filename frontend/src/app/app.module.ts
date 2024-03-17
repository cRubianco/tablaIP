import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ServicesModule } from './services.module';

export function initializeApp() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return ()=>{};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //modulo http
    ReactiveFormsModule, //modulo formularios reactivos
    MaterialModule,
    ServicesModule, //modulo servicios
  ],
  providers: [
    {provide: APP_INITIALIZER,useFactory: initializeApp, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

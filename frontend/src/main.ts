import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './enviroments/enviroment';

if (environment.production) {
  enableProdMode();
    //limpìo el log de consola
  if(window) window.console.log=function(){};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

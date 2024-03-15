import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], //permite navegar a la misma pagina
  exports: [RouterModule]
})
export class RoutingModule { }

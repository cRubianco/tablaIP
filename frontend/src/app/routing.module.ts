import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectPage } from '@pages/common/redirectPage';
import {Constants} from "@utils/constants";

/**
 * configuracion de urls
 */
const routes: Routes = [
  //pagina inicial
  // { path: '', component: LoadingPage},
  //login
  // { path: Constants.URL.LOGIN, component: LoginPage},
  { path: Constants.URL.REDIRECT, component: RedirectPage},
  //redireccion
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

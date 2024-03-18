import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesPage } from '@pages/addressesPage';
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
  // { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  { path: Constants.URL.ADDRESSES, component: AddressesPage},
  // { path: Constants.URL.REDIRECT, component: RedirectPage},
  // { path: '404', component: ErrorHtmlComponent },
  //redireccion
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

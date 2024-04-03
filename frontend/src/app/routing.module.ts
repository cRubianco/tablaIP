import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPage } from '@pages/address/addressPage';
import { AddressesPage } from '@pages/addressesPage';
import { RedirectPage } from '@pages/common/redirectPage';
import {Constants} from "@utils/constants";
import { CanDeactivateGuard } from '@utils/routing/canDeactivateGuard';
import { DirectAccessGuard } from '@utils/routing/directAccessGuard';

/**
 * configuracion de urls
 */
const routes: Routes = [
  //pagina inicial
  // { path: '', component: LoadingPage},
  //login
  // { path: Constants.URL.LOGIN, component: LoginPage},
  // { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  
  { path: Constants.URL.ADDRESS, component: AddressPage },
  { path: Constants.URL.ADDRESSES, component: AddressesPage},
  // { path: '404', component: ErrorHtmlComponent },
  //redireccion
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

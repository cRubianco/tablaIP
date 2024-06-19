import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPage } from '@pages/address/addressPage';
import { AddressesPage } from '@pages/address/addressesPage';
import { RedirectPage } from '@pages/common/redirectPage';
import { DashboardPage } from '@pages/dashboard';
import { BasePage } from '@pages/layout/basePage';
import { LoginPage } from '@pages/login/loginPage';
import {Constants} from "@utils/constants";
import { CanDeactivateGuard } from '@utils/routing/canDeactivateGuard';
import { DirectAccessGuard } from '@utils/routing/directAccessGuard';

/**
 * configuracion de urls
 */
const routes: Routes = [
  //pagina inicial
  { path: '', component: DashboardPage},
  //login
  { path: Constants.URL.LOGIN, component: LoginPage},
  // { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  
  { path: Constants.URL.BASEPAGE, component: BasePage },
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

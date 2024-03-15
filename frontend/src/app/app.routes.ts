import { Routes } from '@angular/router';
import { RedirectPage } from '@pages/common/redirectPage';
import { LoadingPage } from '@pages/prelogin/loadingPage';
import { AddressesPage } from '@pages/addressesPage';

import { Constants } from '@utils/constants';

export const routes: Routes = [
    //pagina inicial
    { path: '', component: LoadingPage},
    //address
    { path: Constants.URL.ADDRESS, component: AddressesPage},

    //redireccion
    { path: Constants.URL.REDIRECT, component: RedirectPage},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

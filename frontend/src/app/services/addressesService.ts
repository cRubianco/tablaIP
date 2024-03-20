import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/enviroments/enviroment";
import { Constants } from "@utils/constants";
import { Addresses } from "@model/addresses";

@Injectable()
export class AddressesService {

    /**
   * url servicio empleados
   */
    protected baseUrl:string=environment.SERVER+Constants.URL.API_PATH;
    protected name: string="Dirección IP";

    addresses: Addresses[];

    constructor(protected http: HttpClient) {}

    //======== metodos ==========

    getAddresses() {
      return this.http.get<Addresses[]>(this.baseUrl);
      
    }

}
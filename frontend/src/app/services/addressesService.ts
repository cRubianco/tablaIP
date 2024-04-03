import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { environment } from "src/enviroments/enviroment";
import { Addresses } from "@model/addresses";
import { Constants } from "@utils/constants";

@Injectable()
export class AddressesService  {

    /**
   * url servicio empleados
   */
    protected baseUrl:string=environment.SERVER+Constants.URL.API_PATH;
    protected name: string="Dirección IP";

    constructor(protected http: HttpClient) {}

    //======== metodos ==========

    getAddresses(): Observable<Addresses[]> {
      return this.http.get<Addresses[]>(this.baseUrl)
        .pipe(tap((data) => console.log("all addresses",data)+ JSON.stringify(data)));
        
    }

  /**
   * recupera item
   * @param item
   */
  getAddress(item: Addresses): Observable<Addresses> {
    return this.http.get<Addresses>(this.baseUrl+item._id)
      .pipe(tap((data) => console.log("one address",data)+ JSON.stringify(data)));
    
  }

}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { environment } from "src/enviroments/enviroment";
import { Address } from "@model/address";
import { Constants } from "@utils/constants";

@Injectable()
export class AddressService  {

    /**
   * url servicio empleados
   */
    protected baseUrl:string=environment.SERVER+Constants.URL.API_PATH;
    protected name: string="Dirección IP";

    constructor(protected http: HttpClient) {}

    //======== metodos ==========

    getAddresses(): Observable<Address[]> {
      return this.http.get<Address[]>(this.baseUrl)
        .pipe(tap((data) => console.log("all addresses",data)+ JSON.stringify(data)));
        
    }

  /**
   * recupera item
   * @param item
   */
  getAddress(item: string): Observable<Address> {
    return this.http.get<Address>(this.baseUrl + item)
      .pipe(tap((data) => console.log('oneAddres',data)+JSON.stringify(data)));
  }

  addAddress(item: Address) {
    return this.http.post(this.baseUrl, item);
  }

  updateAddress(id: string, item: Address): Observable<Address> {
    return this.http.put<Address>(this.baseUrl+id, item)
      // .pipe(tap((data) => console.log(''+JSON.stringify(data))));  
  }

  deleteAddress(item: string) {
    return this.http.delete(this.baseUrl+item)
    .subscribe();
  }

}
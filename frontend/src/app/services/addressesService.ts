import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { environment } from "src/environments/environment";
import { Address } from "@model/address";
import { Constants } from "@utils/constants";

@Injectable()
export class AddressService  {

  /**
   * url 
   */
  protected baseUrl: string = environment.SERVER + Constants.URL.API_PATH;
  protected pageUrl: string = this.baseUrl+'address/';  
  protected name: string = "Dirección IP";

  constructor(protected http: HttpClient) {}

  //======== metodos ==========

  getAddresses(): Observable<Address[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem(Constants.TOKEN.TOKEN)
      })
    }
    return this.http.get<Address[]>(this.pageUrl, httpOptions)
      .pipe(tap((data) => JSON.stringify(data)));
  }

  /**
   * recupera una dirección IP
   * @param item
   */
  getAddress(item: string): Observable<Address> {
    return this.http.get<Address>(this.pageUrl + item)
      .pipe(tap((data) => console.log('oneAddres',data)+JSON.stringify(data)));
  }

  /**
   * agrega una dirección IP
   * @param item
   */
  addAddress(item: Address) {
    return this.http.post(this.pageUrl, item);
  }

  /**
   * actualiza una dirección IP
   * @param item
   */
  updateAddress(id: string, item: Address): Observable<Address> {
    return this.http.put<Address>(this.pageUrl+id, item)
  }

  saveAddress(item: Address) {
    if (item._id) {
      return this.http.put<Address>(this.pageUrl+item._id, item)
    } else {
      return this.http.post<Address>(this.pageUrl, item)
    }
  }

  /**
   * borra una dirección IP
   * @param item
   */  
  deleteAddress(item: string) {
    return this.http.delete(this.pageUrl+item)
    .subscribe();
  }

}
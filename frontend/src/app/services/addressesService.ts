import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./utilService";
import { Constants } from "@utils/constants";
import { environment } from "src/enviroments/enviroment";

@Injectable()
export class AddressesService {

    /**
   * url servicio empleados
   */
    protected baseUrl:string=environment.SERVER+Constants.URL.API_PATH;
    protected name: string="Dirección IP";

    constructor(protected http: HttpClient, protected utilService:UtilService) {}

    //======== metodos ==========

    getAddresses() {
      return this.http.get(this.baseUrl);
      
    }

}
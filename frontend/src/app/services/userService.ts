import { HttpClient } from "@angular/common/http";
import { UtilServices } from "./utilServices";
import { Injectable } from "@angular/core";
import { ApiResponse } from "@model/dto/apiResponse";
import { User } from "@model/dto/user";
import { environment } from "src/environments/environment";
import { Constants } from "@utils/constants";

/**
 * Servicio Usuario
 */
@Injectable()
export class UserService {

  /**
   * url
   */
  protected baseUrl:  string = environment.SERVER + Constants.URL.API_PATH;
  protected name: string="El usuario";

  // ============= constructor ====================
  constructor(protected http: HttpClient, protected utilService: UtilServices) {}

  /**
   * Recupera los usuarios con rol Tecnico
   */
    getTechnicians(): Promise<ApiResponse<User[]>> {
      return this.http.get<ApiResponse<User[]>>(this.baseUrl+"technicians").toPromise()
    }

    // getAddress(item: string): Observable<Address> {
    //   return this.http.get<Address>(this.baseUrl + item)
    //     .pipe(tap((data) => console.log('oneAddres',data)+JSON.stringify(data)));
    // }
    
}
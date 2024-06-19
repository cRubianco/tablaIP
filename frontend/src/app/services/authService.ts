import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PopupService } from "./popupService";
import { ApiResponse } from "@model/dto/apiResponse";
import { User } from "@model/dto/user";
import { Role } from "@model/enum/role";
import { Constants } from "@utils/constants";
import { environment } from "src/environments/environment";

/**
 * Servicio de authenticacion
 */
@Injectable()
export class AuthService {

  /**
   * url 
   */
  protected baseUrl: string = environment.SERVER + Constants.URL.API_PATH;
  protected pageUrl: string = 'users/';  
  protected url: string = this.baseUrl+this.pageUrl

  private user: User; //usuario logueado
  private menu: object[]=[]; //menu

  //===================== constructor =================================

  /**
   * constructor
   */
  constructor(private http: HttpClient, private popupService:PopupService) {
  }

  //===================== methods ======================

  /**
   * login
   * @param user
   * @param password
   */
  login(user?: string, password?: string) {
    if (user && password) return this.http.post(this.url + 'login', { user, password }).toPromise();
    else return this.http.get(this.url + 'login').toPromise();
  }

  /**
   * devuelve si el usuario esta logueado
   * @returns {boolean}
   */
  isLogged():boolean{
    return this.user!=null;
  }

  /**
   * logout
   */
  async logout():Promise<ApiResponse<null>>{
    return new Promise((resolve) =>  {
      // this.http.get<ApiResponse<null>>(this.baseUrl + "logout").toPromise()
      //   .then(response=> {
      //     if (response.status == 200) this.cleanSession();
      //     resolve(response);
      //   });
    })
  }

  /**
   * verifica si el usuario tiene uno de los roles requeridos
   * @param roles
   */
  checkForRoles(roles:Role[]):boolean{
    return this.user.role==Role.TECHNICIAN || roles.includes(this.user.role);
  }

  /**
   * verficia que el usuario no sea de alguno de los roles
   * @param roles
   */
  checkRoleNot(roles:Role[]):boolean{
    return !roles.includes(this.user.role);
  }


  /**
   * devuelve el usuario
   */
  getUser():User {
    return this.user;
  }

  getMenu():object[]{
    return this.menu;
  }

  /**
   * devuelve el role
   */
  getRole():Role {
    return this.user?.role;
  }

  isUser(){
    return this.user.role==Role.USER;
  }

  isTechnician(){
    return this.user.role==Role.TECHNICIAN;
  }

  
  isAdmin(){
    return this.user.role==Role.ADMINISTRATOR;
  }

}  
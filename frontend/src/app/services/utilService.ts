import {Injectable} from "@angular/core";
import {Event, Router} from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import {HttpClient, HttpParams} from "@angular/common/http";
// import {ApiResponse} from "@model/dto/apiResponse";
import {Constants} from "@utils/constants";
import {Observable} from "rxjs";
import {LinkAction} from "@model/enum/linkAction";


/**
 * Servicio de utilidades
 */
@Injectable()
export class UtilService {

  /**
   * constructor
   */
  constructor(private router: Router, private snackBar: MatSnackBar,
              private http: HttpClient) {
  }

  //===================== methods =================

  /**
   * expone los eventos del router
   */
  getRouterEvents():Observable<Event>{
    return this.router.events;
  }

  /**
   * navega a una pagina async
   * @param url
   * @param data
   */
  navigate(url:string, data?:any):void{
    this.router.navigate(["/"+url], {
      skipLocationChange: true,
      state: data
    }).then();
  }

  /**
   * navegacion por link
   * @param linkAction
   * @param linkId
   */
  linkNavigate(linkAction: LinkAction, linkId:string) {
    switch (linkAction) {
      case LinkAction.ADDRESS:
        if (this.router.url === "/" + Constants.URL.ADDRESS)
          this.router.navigate(["/"+Constants.URL.DASHBOARD]).then(() => this.navigate(Constants.URL.ADDRESS, {linkId: linkId}));
        else
          this.navigate(Constants.URL.ADDRESS, {linkId: linkId});
        break;
    }
  }

  /**
   * navega a una pagina pero en una nueva ventana
   * @param url
   * @param data
   */
  navigateNewWindow(url:string, data?:any):void{
    data.redirect=true;
    sessionStorage.setItem(Constants.LOCAL_STORE.REDIRECT, JSON.stringify({url:url, data:data}));
    window.open(Constants.URL.REDIRECT);
  }

  redirect():boolean{
    const redirect=sessionStorage.getItem(Constants.LOCAL_STORE.REDIRECT);
    if (redirect) {
      const json=JSON.parse(redirect);
      this.navigate(json.url, json.data);
      sessionStorage.removeItem(Constants.LOCAL_STORE.REDIRECT);
      return true;
    }
    return false;
  }

  /**
   * recupero datos pasados entre paginas
   */
  getState():any {
    // FIXME : la propiedad: lastSuccessfulNavigation no esta en la documentacion oficial de Angular, asi funciona en los dos casos que habia
    // conflicto, la solucion no es optima pero creemos casi con seguridad que al corto plazo no afectara la app; si corremos el riesgo que al
    // no estar en la doc oficial se quite en versiones posteriores de angular.

    // @ts-ignore
    const currentNavigation = this.router.getCurrentNavigation() || this.router.lastSuccessfulNavigation;
    return (currentNavigation == null) ? null : currentNavigation.extras.state;
  }

  /**
   * muestra mensaje por snackbar
   * @param text
   * @param time
   */
  showSnack(text:string, time?:number){
    return this.snackBar.open(text, "OK",{
      duration: time?time:3000,
      verticalPosition:"top",
      horizontalPosition:"right",
      panelClass:["snack"]
    });
  }

  // /**
  //  * envia error al server
  //  * @param message
  //  * @param stack
  //  */
  // sendError(message:string, stack:string) {
  //   this.http.post<ApiResponse<any>>("utils/error", {message: message, stack: stack}).toPromise().then();
  // }

  /**
   * compara dos objetos por id, para combos
   * @param object1
   * @param object2
   */
  compareWithId(object1:any, object2:any):boolean {
    return object1!=null && object2!=null && object1.id==object2.id;
  }

}

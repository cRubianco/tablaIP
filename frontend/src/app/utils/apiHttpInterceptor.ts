import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";
import {Constants} from "./constants";
import {catchError, map} from "rxjs/operators";
import {UtilService} from "@services/utilService";
// import {AuthService} from "@services/authService";
// import {ApiResponse} from "@model/dto/apiResponse";
import {Injectable} from "@angular/core";


/**
 * interceptor request http
 */
@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  //============== Constructor ======================

  constructor(private utilService:UtilService,
              // private authService:AuthService
              ) { }

  //==================== Metodos ===========================
  /**
   * interceptor
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //si es un request por iconito lo dejo pasar
    if (req.url.endsWith(".svg")) return next.handle(req);

    //seteo en request datos por defecto
    let httpsReq = req.clone({
      url: environment.SERVER + Constants.URL.API_PATH+req.url,
      setHeaders: {"Accept":"application/json"},
      withCredentials: true
    });
    // seto el content solo para los que son json
    if  (req.url.indexOf("/multipart")==-1)
      httpsReq = httpsReq.clone({setHeaders: {"Content-Type" : "application/json; charset=utf-8"}});

    //limpio los undefined: TODO ver si necesitamos hacerlo recursivo
    //FIXME solo si es json
    if (httpsReq.body) Object.keys(httpsReq.body).forEach(key => httpsReq.body[key] === undefined ? delete httpsReq.body[key] : '');
    //log
    console.log(httpsReq.method+" "+httpsReq.urlWithParams+" -->  ", httpsReq);

    //invocar request
    return next.handle(httpsReq).pipe(
        map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("RESP "+ event.url+" -->  ", event);
          let duration
          // if (event.url.indexOf("/multipart")==-1){ // defino la duración del snack segun el endpoint
          //   duration = 3000;
          // }else{
          //   duration = 1200000; // para que se cierre con click en Ok.
          // }
          if (event.body.status === 400) { //bad request
            if (event.body.message)
              this.utilService.showSnack(event.body.message, duration); // le paso la duración del snack
            else
              this.utilService.showSnack("No se ha podido completar la operación. Valide los datos ingresados y vuelva a intentarlo.");
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return new Observable<HttpEvent<any>>(subscriber => {
          let message;
          switch (error.status)  {
            case 401: //sin sesion
              // this.authService.cleanSession();
              message="Ha expirado la sesión. Por favor vuelva a ingresar sus credenciales.";
              // this.utilService.navigate(Constants.URL.LOGIN);
              break;
            case 403: //sin permisos
              message="No tienes permiso para realizar esta acción. Contacta con el Administrado.";
              break;
            default:
              message="Se ha producido un error. Intente nuevamente o contacte con el Administrador.";
              break;
          }
          this.utilService.showSnack(message);
          //envio respuesta con error
          // subscriber.next(new HttpResponse<ApiResponse<any>>({
          //   body:{status:error.status} //servicio no disponible
          // }));
          //cierro observable
          subscriber.complete();
        });
      }));
  }

}

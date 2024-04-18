import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";


/**
 * permite el acceso directo a un link
 */
@Injectable()
export class DirectAccessAllow implements CanActivate {

  /**
   * constructor
   * @param router
   */
  constructor(private router: Router) {
  }

  /**
   * canActivate
   * @param next
   * @param state
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // si la pagina anteriror esta vacia entonces el usuario esta intentando acceder directamente por url
    if (this.router.url === '/') {
      //guardo a donde quiere ir y lo redirigo el loading....
      const url = state.url.split("/");
      this.router.navigate(['/'],{
        skipLocationChange:true,
        state:{
          // linkAction: LinkAction[url[1].toUpperCase()],
          // linkAction: LinkAction[url[1].toString()],
          linkId: url[2]
        }
      }).then(); // redirecciono a pagina inicial
      return false;
    }
    return true;
  }
}

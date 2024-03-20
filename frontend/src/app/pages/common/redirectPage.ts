import {Component, OnInit} from "@angular/core";
import {UtilServices} from "@services/utilServices";

/**
 * para abrir pantalla en nueva solapa
 */
@Component({
  selector: 'redirect-page',
  templateUrl: './redirectPage.html'
})
export class RedirectPage implements OnInit {

  /**
   * constructor
   * @param utilService
   */
  constructor(private utilServices:UtilServices) {
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    //redirecciono a donde corresponda, si no hay pagina definida cierro la solapa
    if (!this.utilServices.redirect()) window.close();
  }

}

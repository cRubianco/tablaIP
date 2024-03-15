import {Component, OnInit} from "@angular/core";
import {UtilService} from "@services/utilService";

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
  constructor(private utilService:UtilService) {
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    //redirecciono a donde corresponda, si no hay pagina definida cierro la solapa
    if (!this.utilService.redirect()) window.close();
  }

}

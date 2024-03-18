import { Component} from '@angular/core';
import {Constants} from "@utils/constants";

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  today = Date.now();

  /**
   * constructor
   */
  constructor() {
  }

  /**
   * devuelve la version
   */
  getVersion(){
    return Constants.VERSION;
  }

}

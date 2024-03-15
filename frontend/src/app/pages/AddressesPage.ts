import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OnDestroyMixin } from "@w11k/ngx-componentdestroyed";

@Component({
  selector: 'app-addressesPage',
  templateUrl: './addressesPage.html',
  styleUrls: ['./addressesPage.css'],
})
export class AddressesPage extends OnDestroyMixin {
  /**
   * form
    */
  public form: FormGroup;
}
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UtilServices } from "@services/utilServices";
import { Constants } from "@utils/constants";
import { OnDestroyMixin, untilComponentDestroyed } from "@w11k/ngx-componentdestroyed";


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardPage extends OnDestroyMixin implements OnInit {

  /**
  * form
  */
  public form: FormGroup;
  
  /**
   * string error
   */
  public error: string;
  
  private readonly state;

  /**
   * constructor
   * @param fb
   * @param authService
   * @param utilService
   */
  constructor(private fb: FormBuilder, private utilService: UtilServices) {
    super();
    this.state=utilService.getState();
  }
    
    /**
    * init
    */
    ngOnInit(){
    //usuario no logueado
      this.form = this.fb.group({
      });
    }

  /**
   * ingresa a la tabla.
   */
  enter(){
    this.utilService.navigate(Constants.URL.LOGIN);
  }
  
}
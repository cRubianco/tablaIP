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
    //usuario no logueado, termino de construir la pagina
      this.form = this.fb.group({
        // user: [localStorage.getItem(Constants.LOCAL_STORE.REMEMBER)],
        // password: 'hola',
        // rememberMe: [localStorage.getItem(Constants.LOCAL_STORE.REMEMBER)!=null]
      });

      // this.form.valueChanges
      //   .pipe(untilComponentDestroyed(this))
      //   .subscribe(()=>{
      //   this.error="";//clean error message

      // });

      //chequeo si ya estoy loegueado
      // if (this.utilService.isLogged()) {
      //   console.log('esta logueado? ',this.utilService.isLogged());
        
      //   this.enter();
      // } else {
      //   sessionStorage.clear();
      // }

    }

  /**
   * ingresa a la tabla.
   */
  enter(){
    this.utilService.navigate(Constants.URL.ADDRESSES);
  }
  
}
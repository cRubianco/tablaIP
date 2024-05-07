import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UtilServices } from "@services/utilServices";
import { Constants } from "@utils/constants";
import { OnDestroyMixin, untilComponentDestroyed } from "@w11k/ngx-componentdestroyed";


@Component({
  selector: 'app-root',
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
        user: [localStorage.getItem(Constants.LOCAL_STORE.REMEMBER)],
        password: 'hola',
        rememberMe: [localStorage.getItem(Constants.LOCAL_STORE.REMEMBER)!=null]
      });
      this.form.valueChanges
        .pipe(untilComponentDestroyed(this))
        .subscribe(()=>{
        this.error="";//clean error message

      });
      //chequeo si ya estoy loegueado
      if (this.utilService.isLogged()) {
        this.enter();
      } else {
        sessionStorage.clear();
      }
    }

  /**
   * ingresa al dashboard o pagina sin rol.
   */
   enter(){
      if (this.state && this.state.linkAction)
        console.log('68 --  ',this.state);
        
          this.utilService.linkNavigate(this.state.linkAction, this.state.linkId);
        // else
        //   this.utilService.navigate(Constants.URL.DASHBOARD);
  }
  
}
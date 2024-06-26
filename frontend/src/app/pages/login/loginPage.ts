import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {OnDestroyMixin, untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";

import { CustomValidators } from '@utils/customValidators';
import { AuthService } from '@services/authService';
import { Utils } from '@utils/utils';
import { Constants } from '@utils/constants';

/**
 * Pagina de login
 */
@Component({
  selector: 'login-page',
  templateUrl: './loginPage.html',
  styleUrls: ['./loginPage.css']
})
export class LoginPage extends OnDestroyMixin implements OnInit {

  form: FormGroup;
  data: any;
  error: string;

  //=================== Constructor =====================

  constructor(private fb:FormBuilder, private authService: AuthService) {
    super();
  }

  /**
   * init
   */
  ngOnInit() {
     //create reactive form
     this.form = this.fb.group({
      username: [localStorage.getItem(Constants.LOCAL_STORE.REMEMBER), [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      role: [{value:null}]
    });
    
    if (this.data != null) {
      Object.keys(this.data).forEach(name => {
        if (this.form.controls[name]) {
          this.form.controls[name].patchValue(this.data[name], {onlySelf: true});
        }
      });
    }
  }

  //================== Methods ===================
  
  login(): Promise<any> {
    return this.authService.login(this.form.controls['username'].value, this.form.controls['password'].value)
    .then(response=> {
        console.log('hola  ', response);
        switch(response) {
          case 200:
            // if (this.form.controls.rememberMe.value==true)
            console.log('llego');
            
              localStorage.setItem(Constants.LOCAL_STORE.REMEMBER,this.form.controls['username'].value);
            this.enter();
            break;
          case 400:
            console.log('400');
            
            Utils.resetFormControlValue(this.form.controls['password']);
            this.error = "Sus credenciales son incorrectas. Intente nuevamente o contacte al Administrador.";
            break;
            case 401:
            console.log('401');
            Utils.resetFormControlValue(this.form.controls['password']);
            this.error = "Debe ingresar su contraseña para iniciar sesión.";
            break;
        }
      })
  }

  enter() {
    console.log('Method not implemented.');
  }


}
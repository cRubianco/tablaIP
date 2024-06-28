import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {OnDestroyMixin, untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";

import { CustomValidators } from '@utils/customValidators';
import { AuthService } from '@services/authService';
import { Constants } from '@utils/constants';
import { UtilServices } from '@services/utilServices';

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

  constructor(private fb:FormBuilder, private authService: AuthService,
              private utilService: UtilServices) {
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
        console.log('resp  ',response['token'] );
        
        if (!response['token']) {
          this.error = response.toString();
          console.log('hubo un error --> ', this.error);
          
        } else {
          localStorage.setItem(Constants.TOKEN.TOKEN, response['token']);
          console.log('localStorage -- ', localStorage);
          this.utilService.navigate(Constants.URL.ADDRESSES);  
        }
      })
  }

}
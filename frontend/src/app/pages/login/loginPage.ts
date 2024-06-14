import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {OnDestroyMixin, untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";

import { CustomValidators } from '@utils/customValidators';

/**
 * Pagina de login
 */
@Component({
  selector: 'login-page',
  templateUrl: './loginPage.html',
  styleUrls: ['./loginPage.css']
})
export class LoginPage extends OnDestroyMixin implements OnInit {

  formgr: FormGroup;
  data: any;

  //=================== Constructor =====================

  constructor(private fb:FormBuilder) {
    super();
  }

  /**
   * init
   */
  ngOnInit() {
     //create reactive form
     this.formgr = this.fb.group({
      user: [{value: null}, [Validators.required, Validators.maxLength(50), CustomValidators.alpha]],
      password: [{value: null}, [Validators.required, Validators.maxLength(20)]],
    });
    if (this.data != null) {
      Object.keys(this.data).forEach(name => {
        if (this.formgr.controls[name]) {
          this.formgr.controls[name].patchValue(this.data[name], {onlySelf: true});
        }
      });
    }

  //================== Methods ===================
  
  }

}
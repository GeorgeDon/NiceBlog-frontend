import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { UserRegisterComponent } from './register/user-register.component';
import { UserLoginComponent } from './login/user-login.component';

import {UserRoutes} from './user.routes'
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
  	UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    RouterModule.forChild(UserRoutes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    UserLoginComponent
  ]
})
export class UserModule { }
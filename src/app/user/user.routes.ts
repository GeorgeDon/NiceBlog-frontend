/**
 * Created by GeorgeDon on 2017/11/14.
 */

import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './register/user-register.component';
import { UserLoginComponent } from './login/user-login.component';

export const UserRoutes=[
   {
    path:'user',
    redirectTo:'register',
    pathMatch:'full'
  },
  {
    path:'register',
    component:UserRegisterComponent
  },
    {
    path:'login',
    component: UserLoginComponent
  }
  ]

/**
 * Created by GeorgeDon on 2017/11/14.
 */

import { RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent }  from './test.component';

export const testRoutes=[
  {
    path:'',
    component:TestComponent,
    children:
        [ {
          path:'',
          redirectTo:'test1',
          pathMatch:'full'
        } ,{
        path:'test1',
       component:Test1Component
       },
          {
            path:'test2',
            component:Test2Component
          },
        ]
  }]

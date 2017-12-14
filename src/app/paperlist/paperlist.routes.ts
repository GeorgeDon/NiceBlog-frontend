/**
 * Created by GeorgeDon on 2017/11/14.
 */

import { RouterModule } from '@angular/router';
import { PaperListComponent } from './paperlist.component';
import { PaperDetailComponent } from './detail/paperdetail.component';

export const PaperListRoutes=[
  {
    path:'paperlist',
    component:PaperListComponent
  },
    {
    path:'paperlist/:id/detail',
    component: PaperDetailComponent
  }

  ]

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaperListComponent } from './paperlist.component';
import { PaperComponent } from './paper/paper.component';
import { PaperListRoutes } from './paperlist.routes';
import { PaperDetailComponent } from './detail/paperdetail.component';

@NgModule({
  declarations: [
  	PaperListComponent,
    PaperComponent,
    PaperDetailComponent
  ],
  imports: [
    RouterModule.forChild(PaperListRoutes),
    CommonModule
  ],
  exports:[
    PaperListComponent
  ]
})
export class PaperListModule { }
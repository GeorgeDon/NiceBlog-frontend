import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AccordionModule } from 'ng2-bootstrap';
import { TestComponent }  from './test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { testRoutes } from './test.routes';

@NgModule({
  declarations: [
    TestComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    AccordionModule,
    RouterModule.forChild(testRoutes)
  ],
  exports:[
    TestComponent
  ]
})
export class TestModule { }

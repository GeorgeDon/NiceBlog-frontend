import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';


@Component({
  selector: 'test2-selector',
  templateUrl: './test2.component.html',
  animations:[flyIn]
})
export class Test2Component implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("test")
  }
}

import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';


@Component({
  selector: 'test-selector',
  templateUrl: './test.component.html',
  animations:[flyIn]
})
export class TestComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log("test")
  }
}

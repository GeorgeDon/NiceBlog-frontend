import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'paper-selector',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  // innertext: string;
  @Input()
  public paper: any;
  constructor() {  	
  }

  ngOnInit() {

  }
}
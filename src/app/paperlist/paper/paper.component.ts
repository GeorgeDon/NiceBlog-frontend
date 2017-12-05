import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'paper-selector',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  // innertext: string;
  @Input()
  public paper: any;
  constructor( public router: Router) {  	
  }

  ngOnInit() {

  }

  onClick(){
    console.log(this.paper.id);
    this.router.navigateByUrl("/paperlist/"+this.paper.id+"/detail");
  }
}
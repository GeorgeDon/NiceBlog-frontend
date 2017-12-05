import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {HttpService } from '../../service/http/http.service'


@Component({
  selector: 'paperdetail-selector',
  templateUrl: './paperdetail.component.html',
  styleUrls: ['./paperdetail.component.css']
})
export class PaperDetailComponent implements OnInit {

  // innertext: string;
  
  public id: string;
  public paper: any;
  constructor(public httpService: HttpService,
              public router: Router,
              public activeRoute: ActivatedRoute) {  	
  }

  ngOnInit() {
      this.activeRoute.params.subscribe(params => {
       
        this.id=params.id;
       });

     this.httpService.getPapersDetail(this.id).subscribe(
      data => {        
        this.paper=data['data']['paper'];  
      },
      error => console.error(error)
    );
  }
}
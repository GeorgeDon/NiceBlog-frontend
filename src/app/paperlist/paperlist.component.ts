import { Component, OnInit } from '@angular/core';
import {HttpService } from '../service/http/http.service'

@Component({
  selector: 'paperlist-selector',
  templateUrl: './paperlist.component.html',
  styleUrls: ['./paperlist.component.css']
})
export class PaperListComponent implements OnInit {

  // innertext: string;
  papers: any[]=[];
  constructor(public httpService: HttpService) {  	
  }

  ngOnInit() {
    //console.log("main")
    this.httpService.getPapersList('1','10').subscribe(
      data => {        
        this.papers=data['data']['papers'];  
      },
      error => console.error(error)
    );
  }
}
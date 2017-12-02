import { Component, OnInit } from '@angular/core';
import {HttpService } from '../service/http/http.service'

@Component({
  selector: 'main-selector',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import {HttpService } from '../service/http/http.service'

@Component({
  selector: 'paperlist-selector',
  templateUrl: './paperlist.component.html',
  styleUrls: ['./paperlist.component.css']
})
export class PaperListComponent implements OnInit {
    papers: any[]=[];
    count: number;
    currentPage: number;
  constructor(public httpService: HttpService) {  	
  }

  ngOnInit() {
    this.httpService.getPaperInfos('1','10').subscribe(
      data => {        
        this.papers=data['data']['papers'];  
        this.count=data['data']['count'];
        this.count=Math.ceil(this.count/10);       
        this.currentPage=0
      },
      error => console.error(error)
    );
  }

  changePage(pageNum){
    this.currentPage=pageNum;
     this.httpService.getPaperInfos(pageNum+1,'10').subscribe(
      data => {        
        console.log(data);
        this.papers=data['data']['papers'];  
        this.count=data['data']['count'];
        this.count=Math.ceil(this.count/10);            
      },
      error => console.error(error)
    );
  }
}
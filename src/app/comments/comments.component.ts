import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpService } from '../service/http/http.service'

@Component({
  selector: 'selector-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  
  comments: any[]; 
  content: string;
  count: number;
  currentPage: number;
  constructor(public httpService: HttpService) {
  }

  ngOnInit() {
     this.getComments();
  }

  getComments(){
    this.httpService.getComments('1','10').subscribe(
        data => {        
          this.comments=data['comments'];  
          this.count=data['count'];
          this.count=Math.ceil(this.count/10);       
          this.currentPage=0
        },
        error => console.error(error)
    );
  }

   changePage(pageNum){
    this.currentPage=pageNum;
     this.httpService.getComments(pageNum+1,'10').subscribe(
      data => {        
        console.log(data);
        this.comments=data['comments'];  
        this.count=data['count'];
        this.count=Math.ceil(this.count/10);            
      },
      error => console.error(error)
    );
  }

  submit(){
     if (this.content) {
        this.httpService.postComment(this.content).subscribe(
        data => {        
          console.log(data);
          if ("200"===data['status']) {
                 this.comments=data['comments'];
           }else if ("401"===data['status']) {
             console.log("请先登录")
           } else{
             console.log("其他")             
           }     
          this.content='';
          this.refresh(); 
        },
        error => console.error(error)
    );
        
     }     
  }  

  refresh(){
      this.getComments();
  }

}

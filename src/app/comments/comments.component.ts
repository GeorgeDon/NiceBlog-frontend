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
  constructor(public httpService: HttpService) {
  }

  ngOnInit() {
     this.getComments();
  }

  getComments(){
    this.httpService.getComments().subscribe(
        data => {        
          this.comments=data['comments'];
        },
        error => console.error(error)
    );
  }

  submit(){
     if (this.content) {
        this.httpService.postComment(this.content).subscribe(
        data => {        
          console.log(data);
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

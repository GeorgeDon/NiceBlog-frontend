import { Component } from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import {HttpService } from '../service/http/http.service'

import './ckeditor.loader';


@Component({
  selector: 'ngx-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CKEditorComponent {
     content: any;
     title: string;
     author: string; 
     constructor(public httpService: HttpService){
     	this.author="GeorgeDon";

     }

     commit(){
	        this.httpService.addPaper(this.author,this.title,this.content).subscribe(
	      data => {        
	        console.log(data) 
	      },
	      error => console.error(error)
    );
     }
}

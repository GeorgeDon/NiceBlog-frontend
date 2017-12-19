import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {HttpService } from '../../service/http/http.service'


@Component({
  selector: 'pagination-selector',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input() totalPage: number;
    @Input() currentPage: number;
    @Output() pageChange = new EventEmitter<number>();


    constructor() {  	
      }

    ngOnInit() {

      }

    changePage(pageNum) {
       console.log(this.totalPage);
       console.log(pageNum);
       this.pageChange.emit(pageNum);
    }

    goPrevious(pageNum) {
        if (pageNum >= 1) {
            this.changePage(pageNum - 1);
        }
    }

    goNext(pageNum) {
        if (pageNum <= this.totalPage - 2) {
            this.changePage(pageNum + 1);
        }
    }
}
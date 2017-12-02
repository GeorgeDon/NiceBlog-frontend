import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { flyIn } from '../../animations/fly-in';
import {user} from './user';

@Component({
  selector: 'test1-selector',
  templateUrl: './test1.component.html',
  animations:[flyIn]
})
export class Test1Component implements OnInit {
  formG: FormGroup;
  myUser: user;
  constructor(public http:Http) {
    this.myUser=new user("tangjiangzhou","121231");
    // this.formG=new FormGroup({
    //   name: new FormControl(this.myUser.name,[Validators.required,Validators.minLength(5),Validators.maxLength(9)]),
    //   num: new FormControl(this.myUser.num,Validators.pattern("^[0-9]*$"))
    // });
  }
  ngOnInit() {
    console.log("test")
  }

  doSubmit(){
    console.log(this.myUser)
  }
  keyupTest(inda:any){
    console.log(inda)
  }
  getInfo(){
    let headers = new Headers();
    headers.append("Accept","*/*")
    this.http
      .get("http://127.0.0.1:6801/v1/test",headers)
      .map((res:Response) => {
        let result=res.json();
        console.log(result);
        return result;
      }).subscribe(
      data=>{console.log(data[0].description)},
      error=>{console.log(error)})
  }

}

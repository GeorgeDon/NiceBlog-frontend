import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user.model';
import {HttpService } from '../../service/http/http.service'

@Injectable()
export class UserLoginService {
  public subject: Subject<User> = new Subject<User>();
  
  constructor(public httpService: HttpService){}

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public login(user:User){
   this.httpService.login(user.userName,user.password).subscribe(
        data => {        
          console.log(data);
          let token: string =data['token'];
          let currentUser:any={'userName': user.userName,'token': token};
          localStorage.setItem("currentUser",JSON.stringify(currentUser));
          this.subject.next(Object.assign({},currentUser));
        },
        error => console.error(error)
    );
  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
  constructor() { }
  loginData:any ={userName:'jagdish',password:123456}
  
  loginSuccessData:any;

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  loginPath: any;
  
  constructor() { }
  loginData:any ={userName:1234567890 ,password:123456}
  
  loginSuccessData:any[]=[]

}

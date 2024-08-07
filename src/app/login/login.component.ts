import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formbuilder:FormBuilder ,private apiCall:ApiCallService,private router:Router){ }
  loginForm!:FormGroup
 
  storeLoginData:any;
  

ngOnInit(){
  this.storeLoginData=this.apiCall.loginData
this.formLoad()

}
formLoad(){
  this.loginForm=this.formbuilder.group({
  userName:[''],
  password:['']

  })
}
log:any[]=[]
submit(){
  if(this.storeLoginData.userName==this.loginForm.get('userName')?.value && this.storeLoginData.password==this.loginForm.get('password')?.value){
  this.router.navigateByUrl('shopping')
  }
 this.log.push(this.loginForm.value)
this.apiCall.loginSuccessData=this.log
}
}

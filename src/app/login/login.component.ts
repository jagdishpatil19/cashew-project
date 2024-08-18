import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formbuilder:FormBuilder ,private apiCall:ApiCallService ,private router:Router){ }
  loginForm!:FormGroup
 
  storeLoginData:any;
  loginSucessPopUp:boolean=false
 loginFormHide:boolean=true
 loginError:boolean=false
ngOnInit(){
  this.storeLoginData=this.apiCall.loginData
this.formLoad()

}
formLoad(){
  this.loginForm=this.formbuilder.group({
  userName:['',[Validators.required,
    // Validators.pattern('^[0-9]{10}$'),
    Validators.maxLength(10),
    Validators.minLength(10),]],
  password:['']

  })
}
log:any[]=[]
submit(){
  if(this.storeLoginData.userName==this.loginForm.get('userName')?.value && this.storeLoginData.password==this.loginForm.get('password')?.value){
    this.log.push(this.loginForm.value)
    // this.apiCall.loginSuccessData=this.log
    localStorage.setItem('loggedDataStore',JSON.stringify(this.log))

    this.loginSucessPopUp=true
    this.loginFormHide=false 

    setTimeout(()=>{
      this.router.navigateByUrl('shopping')
    },2000)

  }
  else{
    this.loginError=true
    setTimeout(()=>{
      this.loginError=false
    },5000)
  }

}
}

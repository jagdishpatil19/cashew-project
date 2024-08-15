import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

constructor(private formBuilder:FormBuilder ,private router:Router,private apiCallservice:ApiCallService){}

// signupsuccess popUp sms
SignUpSucessPopUp:boolean=false
signUpFormHide:boolean=true

signUpData:any[]=[]
ngOnInit(){
this.formLoad()
}

  signUpForm!:FormGroup

formLoad(){
  this.signUpForm=this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    phoneNo:['',[ Validators.required,Validators.maxLength]],
    email:['',[Validators.required,Validators.email]],
   dateOfBirth:['',[Validators.required]],
   gender:['',[Validators.required]],
   state:['',[Validators.required]],
   city:['',[Validators.required]],
   pinCode:['',[Validators.required]],
   password:['',[Validators.required]],
   confirmPassword:['',[Validators.required]],
   condition:['',[Validators.required]]
  })
}
// password and confirm password validtaion
password:any;
confirmpassword:any;
passwordError:boolean=false
pass(passvalue:any){
 this.password=passvalue
  
}
confirmPass(confirmpassvalue:any){
  this.confirmpassword=confirmpassvalue
  this.passwordError=false
}
 


submit(){
  console.log(this.signUpForm.value)
  if(this.password===this.confirmpassword &&  this.signUpForm.get('condition')?.valid ){
   
    this.signUpFormHide=false
    this.SignUpSucessPopUp=true
    setTimeout(()=>{
      this.router.navigateByUrl('shopping')
     
    },2000)
  }
  else{
this.passwordError=true
  }

 this.signUpData.push(this.signUpForm.value)
 this.apiCallservice.loginSuccessData=this.signUpData
}


}

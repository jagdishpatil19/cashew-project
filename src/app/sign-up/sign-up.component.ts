import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

constructor(private formBuilder:FormBuilder){}


ngOnInit(){
this.formLoad()
}

  signUpForm!:FormGroup

formLoad(){
  this.signUpForm=this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    phoneNo:['',[ Validators.required,Validators.maxLength]],
    email:[''],
   dateOfBirth:[''],
   gender:[''],
   state:[''],
   city:[''],
   pinCode:[''],
   password:[''],
   confirmPassword:['']
  })
}
submit(){
  console.log(this.signUpForm.value)
}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  cartHide:boolean=true
  loginToggleButton:boolean=true
  logoutToggleButton:boolean=false

  constructor(private router:Router,private apiCall:ApiCallService){}
   

  ngOnInit(){
    const loggedDataFromLocal= localStorage.getItem('loggedDataStore') // data get from local storage
    if(loggedDataFromLocal){
       this.loginToggleButton=false
       this.logoutToggleButton=true
    }
   
    else{
      this.loginToggleButton=true
      this.logoutToggleButton=false
    }
    console.log(loggedDataFromLocal, 'this is local storage from navbar');
    
  }
  cartToggle(){
 this.cartHide=false
  }
 


  // search method impliment
  
  @Output() searchData=new EventEmitter

  searchValue(value:any){
    console.log(value,'this is searching value')
    this.searchData.emit(value)
  
  }

  //this is logout proceess
  logout(){
   localStorage.removeItem('loggedDataStore')
   this.router.navigateByUrl('home')
  }
}

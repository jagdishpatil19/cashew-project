import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  cartHide:boolean=true
 

  constructor(private router:Router){}
   
  cartToggle(){
 this.cartHide=false
  }
 


  // search method impliment
  
  @Output() searchData=new EventEmitter

  searchValue(value:any){
    console.log(value,'this is searching value')
    this.searchData.emit(value)
  
  }
}

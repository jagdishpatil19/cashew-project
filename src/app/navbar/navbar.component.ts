import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  cartHide:boolean=true
  loginToggleButton:boolean=true
  logoutToggleButton:boolean=false
  cartCountInLocalStorage:any[]=[]
  constructor(private router:Router,private apiCall:ApiCallService,private productService:ProductDetailsService){}
  
  
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
    
    
    //this is for cart count 
    const localAddData=(localStorage.getItem('addCartItem'))
    if(localAddData!==null){
      this.cartCountInLocalStorage=JSON.parse(localAddData)
      this.cartCount=this.cartCountInLocalStorage.length // cartData length store and send on navbar cart ietm
     
    }
    else{
      this.cartCount=0
    }
 

  }
  cartToggle(){
    this.cartHide=false
  }
  
  
  
  // search method impliment
  
  @Output() searchData=new EventEmitter
  @Input()cartCount:any
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

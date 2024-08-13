import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  productDropdown:boolean=false
  flavourDrop:boolean=false
  userDrop:boolean=false
  cartHide:boolean=true
 
  productDrop(){
    this.productDropdown=!this.productDropdown
  
    if(this.productDropdown==true){
      this.flavourDrop=false
      this.userDrop=false
    }
  }

  flavourDropdown(){
    this.flavourDrop=!this.flavourDrop
    if(this.flavourDrop==true){
      this.productDropdown=false
      this.userDrop=false
    }
  }
  userDropdown(){
    this.userDrop=!this.userDrop
    if(this.userDrop==true){
      this.flavourDrop=false
      this.productDropdown=false
    }
  }
  cartToggle(){
 this.cartHide=false
  }
  hideDropDwoun(){
    this.productDropdown=false
  }
  dropDowncancle(){
    if(this.productDropdown==true || this.flavourDrop==true ||  this.userDrop==true){
      this.productDropdown=false
      this.flavourDrop=false
      this.userDrop=false

    }
  }


  // search method impliment
  
  @Output() searchData=new EventEmitter

  searchValue(value:any){
    console.log(value,'this is searching value')
    this.searchData.emit(value)
  }
}

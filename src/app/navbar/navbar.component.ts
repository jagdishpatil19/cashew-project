import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  productDropdown:boolean=false
  flewerDrop:boolean=false
  userDrop:boolean=false
  cartHide:boolean=true
  productDrop(){
    this.productDropdown=!this.productDropdown
    if(this.productDropdown==true){
      this.flewerDrop=false
      this.userDrop=false
    }
  }

  flewerDropdown(){
    this.flewerDrop=!this.flewerDrop
    if(this.flewerDrop==true){
      this.productDropdown=false
      this.userDrop=false
    }
  }
  userDropdown(){
    this.userDrop=!this.userDrop
    if(this.userDrop==true){
      this.flewerDrop=false
      this.productDropdown=false
    }
  }
  cartToggle(){
 this.cartHide=false
  }
}

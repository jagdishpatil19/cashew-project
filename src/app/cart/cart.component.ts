import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private productService:ProductDetailsService,private router:Router){}
cartDataFromLoaclStorage:any[]=[]
totalCostStore:any[]=[]
totalCount:any
emtyCartError:boolean=true
calculationTable:boolean=false
  ngOnInit(){
// this is cartitem data get from local stroge 
 this.getCartDataFromLocalStorage()

 this.cartDataFromLoaclStorage.filter((ele:any,index:any)=>{
   this.totalCostStore.push(ele.productCost)
 })
  this.totalCount=this.totalCostStore.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
 
 console.log(this.totalCount);

  }

getCartDataFromLocalStorage(){
     // this is cartitem data get from local stroge 
     const localAddData=(localStorage.getItem('addCartItem'))
     if(localAddData!==null){
      this.cartDataFromLoaclStorage=JSON.parse(localAddData)
      this.emtyCartError=false
      this.calculationTable=true
     }
     
}

//remove cart items
addCartCount:any=0
  removeCartItem(id:any){
    const deletCartItems = this.cartDataFromLoaclStorage.filter((item: any) => item.id !== id);

    // Update the localStorage with the filtered items
    localStorage.setItem('addCartItem', JSON.stringify(deletCartItems));
console.log(id);
this.getCartDataFromLocalStorage()
this.addCartCount=this.cartDataFromLoaclStorage.length

if(this.addCartCount==0){
this.emtyCartError=true
this.calculationTable=false
}
  }

  producDetails(product:any){
    // this.productService.getProduct=product 
  localStorage.setItem('productDetails',JSON.stringify(product))
   this.router.navigateByUrl('product-detail')
    }
}

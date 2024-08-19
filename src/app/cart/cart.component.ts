import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

cartDataFromLoaclStorage:any[]=[]
totalCostStore:any[]=[]
totalCount:any
emtyCartError:boolean=true
calculationTable:boolean=false
  ngOnInit(){

    // this is cartitem data get from local stroge 
    const localAddData=(localStorage.getItem('addCartItem'))
 if(localAddData!==null){
  this.cartDataFromLoaclStorage=JSON.parse(localAddData)
  this.emtyCartError=false
  this.calculationTable=true
 }
 

 this.cartDataFromLoaclStorage.filter((ele:any,index:any)=>{
   this.totalCostStore.push(ele.productCost)
 })
  this.totalCount=this.totalCostStore.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
 
 console.log(this.totalCount);

  }



//remove cart items
addCartCount:any=0
  removeCartItem(id:any){
    const deletCartItems = this.cartDataFromLoaclStorage.filter((item: any) => item.id !== id);

    // Update the localStorage with the filtered items
    localStorage.setItem('addCartItem', JSON.stringify(deletCartItems));
console.log(id);
this.ngOnInit()
this.addCartCount=this.cartDataFromLoaclStorage.length

if(this.addCartCount==0){
this.emtyCartError=true
this.calculationTable=false
}
  }
}

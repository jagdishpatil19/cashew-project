import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent {
 
  constructor(private router:Router){}

orderSummaryData:any[]=[]
tax:any=0
shippingCharge:any=20
subTotal:any;
discount:any;
total:any
id:any
  ngOnInit(){
   const orderData=localStorage.getItem('orderSummary') 
   if(orderData!==null){
    this.orderSummaryData.push(JSON.parse(orderData))
    console.log(this.orderSummaryData);
    
   }
 this.orderSummaryData.filter((ele:any)=>{
  this.subTotal=ele.productCost*ele.multiply // sub total show only product cost
 this.discount=Math.ceil(this.subTotal-ele.discountedPrice)
 this.total=ele.discountedPrice+this.shippingCharge+this.tax //total all discount shipping charges and tax
 this.id=ele.id
 })
  }
  orderShippingToggle:boolean=false
  orderPlaced(){
    this.orderShippingToggle=true
    setTimeout(()=>{
      this.router.navigateByUrl('compltet-order')
    },9000)
  }
}

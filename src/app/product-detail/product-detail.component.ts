import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

constructor(private productService:ProductDetailsService ,private router:Router,private apiCall:ApiCallService){}

 productDataStore:any=[ ]
productImg:any;
discountProductPrize:any;
orignalPrice:any;
emptyProductHide:boolean=true
WeigthStore:any='500gm'
multiplication:any=1 //for weight check
// login true or false chack or popup notification
loginGetData:any[]=[]
id:any;
loginToggle:boolean=false

  ngOnInit(){
       // this.productDataStore.push(this.productService.getProduct)
       const products=localStorage.getItem('productDetails')
       if(products!==null){
         this.productDataStore.push(JSON.parse(products))

         this.productDataStore.filter((ele:any)=>{
         this.productImg=ele.productImage.img1
         this.orignalPrice=ele.productCost
         this.discountProductPrize=ele.productCost-((ele.productCost*ele.discount)/100) //discpount logic apply
         })
   
         }
   
    const loggedDataFromLocal= localStorage.getItem('loggedDataStore') // data get from local storage
 if(loggedDataFromLocal){
  this.loginGetData.push(loggedDataFromLocal) //local storage data push in applicaton
  this.id=this.loginGetData.length // get length for loginGetData
  console.log(this.loginGetData,'this is local storage data');
   console.log(this.id,"this is login data")
  

 }
  }

  selectWeight(orignal:any,offer:any,multiply:number,Weigth:any){
//orignal price show
this.orignalPrice=orignal*multiply
    // discount logic apply
    this.discountProductPrize=offer*multiply 
  this.WeigthStore=Weigth // get weight from user on button 
  this.multiplication=multiply
  
    
  }
  imageDisplay(images:any){
    this.productImg=images
  }

  // this is for login popUp notification

buyProduct(product:any){
let orderSummrayData=product
 orderSummrayData.discountedPrice=this.discountProductPrize // discounted price add in product object on local storage 
 orderSummrayData.Weigth=this.WeigthStore
 orderSummrayData.multiply=this.multiplication
localStorage.setItem('orderSummary',JSON.stringify(orderSummrayData))

if(this.id==1){
  this.router.navigateByUrl('buy')

}

else{
    this.loginToggle=true
  }
}

cancleButton(){
  this.loginToggle=false
}
loginButton(path:any){
  this.apiCall.loginPath=path
  this.router.navigateByUrl('login')
    }
  
}

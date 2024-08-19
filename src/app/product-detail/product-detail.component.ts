import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

constructor(private productService:ProductDetailsService ,private router:Router){}

 productDataStore:any=[ ]
productImg:any;
productPrize:any;
emptyProductHide:boolean=false
// login true or false chack or popup notification
loginGetData:any[]=[]
id:any;
loginToggle:boolean=false

  ngOnInit(){
    this.productDataStore.push(this.productService.getProduct)
    console.log(this.productDataStore,'this is store')
    this.productDataStore.filter((ele:any)=>{
    this.productImg=ele.productImage.img1
    this.productPrize=ele.productCost
    })
    if(this.productDataStore.length==1){
      this.emptyProductHide=true
    }
    // get login data from local storage
    const loggedDataFromLocal= localStorage.getItem('loggedDataStore') // data get from local storage
 if(loggedDataFromLocal){
  this.loginGetData.push(loggedDataFromLocal) //local storage data push in applicaton
  this.id=this.loginGetData.length // get length for loginGetData
  console.log(this.loginGetData,'this is local storage data');
   console.log(this.id,"this is login data")
  

 }
  }

  selectWeight(prize:any,multiplication:number){
    this.productPrize=prize*multiplication
    console.log(prize,'and ',multiplication  );
    
  }
  imageDisplay(images:any){
    this.productImg=images
  }

  // this is for login popUp notification

buyProduct(){
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
loginButton(){
  this.router.navigateByUrl('login')
    }
  
}

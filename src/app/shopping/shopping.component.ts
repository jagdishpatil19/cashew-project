import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { ProductDetailsService } from '../services/product-details.service';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
 constructor(private router:Router , private apiCall:ApiCallService, private productService:ProductDetailsService){}

loginGetData:any[]=[]
id:any;
 loginToggle:boolean=false


  latestProduct:any=[
    {productName:'Cashewbruch ',
      productImage:'/assets/product1.webp',
      productCost:352,
      productWeight:"500g",
      productFlavour:"Unflavoured",
      id:1
    },
    {productName:'Cashewkerne',
      productImage:'/assets/product2.webp',
      productCost:300,
      productWeight:"500g",
      productFlavour:"Unflavoured",
      id:2
    },
    {productName:'Cashewbruch - afrikanischer',
      productImage:'/assets/product3.webp',
      productCost:310,
      productWeight:"500g",
      productFlavour:"Unflavoured",
      id:3
    },
    {productName:'Cashew Vanille',
      productImage:'/assets/flavour2.webp',
      productCost:400,
      productWeight:"500g",
      productFlavour:"Flavoured",
      id:4
    },
    {productName:'Kakao Cashews',
      productImage:'/assets/flavour3.webp',
      productCost:380,
      productWeight:"500g",
      productFlavour:"Flavoured",
      id:5
    },
    {productName:'Goldene Milch',
      productImage:'/assets/flavour4.webp',
      productCost:362,
      productWeight:"500g",
      productFlavour:"Flavoured",
      id:6
    },
    {productName:'Cashew Curry - Masala',
      productImage:'/assets/flavour5.webp',
      productCost:352,
      productWeight:"500g",
      productFlavour:"Flavoured",
      id:7
    },
  ]

ngOnInit(){
  this.loginGetData= this.apiCall.loginSuccessData
  this.id=this.loginGetData.length
  console.log(this.id,"this is login data")
  
}

  producDetails(product:any){
  this.productService.getProduct=product 
 this.router.navigateByUrl('product-detail')
  }

  //addcart button

 
  addToCart(){
    if(this.id==1){
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', e => {
            button.classList.toggle('added');
        });
    }); 
    
  }
  
  else{
    this.loginToggle=true
  }

  
  }

  // login popup toggle 
  cancleButton(){
    this.loginToggle=false
  }

  loginButton(){
this.router.navigateByUrl('login')
  }

  // searching proceess 

  searchData:any=''
  getSearchData(searchValue:any){
this.searchData=searchValue
  }
 
}

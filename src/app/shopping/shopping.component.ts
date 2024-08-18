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
      productImage:{img1:'/assets/product1.webp',img2:'/assets/cashewbruchno12.webp',img3:'/assets/cashewbruchno13.webp',img4:'/assets/cashewbruchno14.webp'},
      productCost:352,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      id:1
    },
    {productName:'Cashewkerne',
      productImage:{img1:'/assets/product2.webp',img2:'/assets/CashewKerne21.webp',img3:'/assets/CashewKerne22.webp',img4:'/assets/CashewKerne23.webp'},
      productCost:300,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      id:2
    },
    {productName:'Cashewbruch - afrikanischer',
      productImage:{img1:'assets/product3.webp',img2:'/assets/Cashewbruch31.webp',img3:'/assets/Cashewbruch32.webp',img4:'/assets/Cashewbruch33.webp'},
      productCost:310,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      id:3
    },
    {productName:'Cashew Vanille',
      productImage:{img1:'/assets/flavour2.webp',img2:'/assets/vanille41.webp'},
      productCost:400,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      id:4
    },
    {productName:'Kakao Cashews',
 
      productImage:{img1:'/assets/flavour3.webp',img2:'/assets/kakao51.webp',img3:'/assets/kakao52.webp' },
      productCost:380,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",

      id:5
    },
    {productName:'Premium Cashewkernmehl',
     
      productImage:{img1:'/assets/Cashewkernmehl1.webp',img2:'/assets/Cashewkernmehl2.webp',img3:'/assets/Cashewkernmehl3.webp' },
      productCost:362,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      id:6
    },
    {productName:'Cashew Curry - Masala',
      
      productImage:{img1:'/assets/curry1.webp' },
      productCost:352,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      id:7
    },
  ]

ngOnInit(){
const loggedDataFromLocal= localStorage.getItem('loggedDataStore') // data get from local storage
 if(loggedDataFromLocal){
  this.loginGetData.push(loggedDataFromLocal) //local storage data push in applicaton
  this.id=this.loginGetData.length // get length for loginGetData
  console.log(this.loginGetData,'this is local storage data');
   console.log(this.id,"this is login data")
  

 }


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

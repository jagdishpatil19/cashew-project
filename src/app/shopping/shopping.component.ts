import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { ProductDetailsService } from '../services/product-details.service';
 

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
 constructor(private router:Router ,  private productService:ProductDetailsService){}


 
 addDataStoreInUser:any[]=[] // add cart data store and local storage data aslo added
  latestProduct:any=[
    {productName:'Cashewbruch ',
      productImage:{img1:'/assets/product1.webp',img2:'/assets/cashewbruchno12.webp',img3:'/assets/cashewbruchno13.webp',img4:'/assets/cashewbruchno14.webp'},
      productCost:352,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:10,
      id:1
    },
    {productName:'Cashewkerne',
      productImage:{img1:'/assets/product2.webp',img2:'/assets/CashewKerne21.webp',img3:'/assets/CashewKerne22.webp',img4:'/assets/CashewKerne23.webp'},
      productCost:300,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:12,
      id:2
    },
    {productName:'Cashewbruch - afrikanischer',
      productImage:{img1:'/assets/Cashewbruch31.webp',img2:'assets/product3.webp',img3:'/assets/Cashewbruch32.webp',img4:'/assets/Cashewbruch33.webp'},
      productCost:310,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:20,
      id:3
    },
    {productName:'Cashew Vanille',
      productImage:{img1:'/assets/flavour2.webp',img2:'/assets/vanille41.webp'},
      productCost:400,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:12,
      id:4
    },
    {productName:'Kakao Cashews',
 
      productImage:{img1:'/assets/flavour3.webp',img2:'/assets/kakao51.webp',img3:'/assets/kakao52.webp' },
      productCost:380,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:20,
      id:5
    },
    {productName:'Premium Cashewkernmehl',
     
      productImage:{img1:'/assets/Cashewkernmehl1.webp',img2:'/assets/Cashewkernmehl2.webp',img3:'/assets/Cashewkernmehl3.webp' },
      productCost:362,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:22,
      id:6
    },
    {productName:'Cashew Curry - Masala',
      
      productImage:{img1:'/assets/curry1.webp' },
      productCost:352,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:10,
      id:7
    },
    {productName:'Cashewbruch ',
      productImage:{img1:'/assets/product1.webp',img2:'/assets/cashewbruchno12.webp',img3:'/assets/cashewbruchno13.webp',img4:'/assets/cashewbruchno14.webp'},
      productCost:352,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:10,
      id:8
    },
    {productName:'Cashewkerne',
      productImage:{img1:'/assets/product2.webp',img2:'/assets/CashewKerne21.webp',img3:'/assets/CashewKerne22.webp',img4:'/assets/CashewKerne23.webp'},
      productCost:300,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:12,
      id:9
    },
    {productName:'SeldeMer',
      productImage:{img1:'/assets/SeldeMer1.webp',img2:'/assets/Cashewbruch31.webp',img3:'/assets/Cashewbruch32.webp',img4:'/assets/Cashewbruch33.webp'},
      productCost:310,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Unflavoured",
      discount:20,
      id:10
    },
    {productName:'Cashew Vanille',
      productImage:{img1:'/assets/flavour2.webp',img2:'/assets/vanille41.webp'},
      productCost:400,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:12,
      id:11
    },
    {productName:'Kakao Cashews',
 
      productImage:{img1:'/assets/flavour3.webp',img2:'/assets/kakao51.webp',img3:'/assets/kakao52.webp' },
      productCost:380,
      productWeight:{first:"500gm",second:'1kg',third:'2kg'},
      productFlavour:"Flavoured",
      discount:20,
      id:12
    },
  ]
 ngOnInit(){
 const localAddData=(localStorage.getItem('addCartItem'))
 if(localAddData!==null){
  this.addDataStoreInUser=JSON.parse(localAddData)
  this.addCartCount=this.addDataStoreInUser.length // cartData length store and send on navbar cart ietm
 }
 }
 
  producDetails(product:any){
  // this.productService.getProduct=product 
  localStorage.setItem('productDetails',JSON.stringify(product))
 this.router.navigateByUrl('product-detail')
  }

  //addcart button

 
  addButtonAnimation(alldeatils?:any){
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', e => {
            button.classList.toggle('added');
          });

        }); 
        
        console.log(alldeatils)
      }
    

  
  // searching proceess 

  searchData:any=''
  getSearchData(searchValue:any){
this.searchData=searchValue
  }


  //add to cart in local storage
  
 addCartCount:any=0 //this is send on navbar cartIcon for counting
 sendAddCartCount(){

 }
  addCart(button: HTMLButtonElement ,product?:any) {
    button.classList.add('clicked');
this.addDataStoreInUser.push(product)

   localStorage.setItem('addCartItem',JSON.stringify(this.addDataStoreInUser))
  
this.addCartCount=this.addDataStoreInUser.length

  }
  

  ngOnDestroy(){
    if(this.addCartCount==0){
      localStorage.removeItem('addCartItem')
    }
  }
}

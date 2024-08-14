import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent {

constructor(private productService:ProductDetailsService , private router:Router){}

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
      productImage:{img1:'assets/product3.webp',img2:'/assets/Cashewbruch31.webp',img3:'/assets/Cashewbruch32.webp',img4:'/assets/Cashewbruch33.webp'},
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
  ]

  producDetailsShow(product:any){
    this.productService.getProduct=product 
   this.router.navigateByUrl('product-detail')
    }
}

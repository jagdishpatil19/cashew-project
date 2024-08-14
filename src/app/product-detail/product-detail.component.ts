import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

constructor(private productService:ProductDetailsService){}
 productDataStore:any=[ {productName:'Cashewbruch ',
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
}]

  ngOnInit(){
    this.productDataStore=this.productService.getProduct
    console.log(this.productDataStore,'this is store')
  }
}

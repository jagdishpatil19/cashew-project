import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

constructor(private productService:ProductDetailsService){}
 productDataStore:any=[ ]
productImg:any;
productPrize:any;
emptyProductHide:boolean=false
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
    
  }

  selectWeight(prize:any,multiplication:number){
    this.productPrize=prize*multiplication
    console.log(prize,'and ',multiplication  );
    
  }
  imageDisplay(images:any){
    this.productImg=images
  }
}

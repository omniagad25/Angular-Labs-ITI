import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { ProductRequestsService } from '../services/product-requests.service';
import { CartCounterService } from '../services/cart-counter.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,CurrencyPipe],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  //products: Array<Product>=Products;
  // bigImgSrc?: string;
  // product!:Product;
  // @Input() id:string="";
  // constructor(private productRequests: ProductRequestsService, private productShareService:CartCounterService ){
  // }
  // showImg(pic: string): void {
  //   this.bigImgSrc = pic;
  // }
     
  //  createProduct(): Product {
  //   return {
  //     id: 0,
  //     title: '',
  //     description: '',
  //     price: 0,
  //     discountPercentage: 0,
  //     rating: 0,
  //     stock: 0,
  //     brand: '',
  //     category: '',
  //     thumbnail: '',
  //     images: [],
  //     createdAt: '',
  //   };
  // }

  // ngOnInit() {
  //   // this.product = this.products.find((product: Product) => product.id == parseInt(this.id)) || this.createProduct();
  //   this.productRequests.getProductDetails(this.id).subscribe((res:any)=>this.product=res);
  // }
  // addToCart(){
  //   this.productShareService.addToCart(this.product);
  // }
  @Input() id! : number;
productDetails! : Product;

constructor(private productsRequests : ProductRequestsService, private cartService : CartCounterService){}

ngOnInit(){
  this.productsRequests.getProductDetails(this.id).subscribe( (res : any) => this.productDetails = res)
}

addToCart(){
  this.cartService.addToCart(this.productDetails)
}

}

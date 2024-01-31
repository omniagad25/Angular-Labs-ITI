import { Component, Input } from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';
import { Product } from '../interface/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {
  @Input() id! : number;
  cartItems! : Array<{ product: Product, quantity: number }>;
  constructor(private cartService : CartCounterService){}

  ngOnInit(){
    this.cartItems = this.cartService.getItems()
    console.log(this.cartItems)
  }

  decreaseQuantity(id : number){
      this.cartService.decreaseQuantity(id);
  }

  increaseQuantity(id : number){
      this.cartService.increaseQuantity(id);
      this.cartItems = this.cartService.getItems()

  }
  removeFromCart(id : number){
    this.cartService.removeFromCart(id);
  }

  getTotalPrice(): number {
    let totalPrice = 0;

    for (const item of this.cartItems) {
      totalPrice += item.product.price * item.quantity;
    }

    return totalPrice;
  }
}

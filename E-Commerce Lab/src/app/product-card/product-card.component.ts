import { Component, EventEmitter,Input,Output } from '@angular/core';

import { Product } from '../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 // @Input() cardItem: Product;
  @Output() sendToParent = new EventEmitter<Product>();

  constructor(private router : Router){}

  redirectToDetails(id : string){
     this.router.navigate(['game-details' , id])
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getctr(){
    return this.items.length
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

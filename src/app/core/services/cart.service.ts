import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}

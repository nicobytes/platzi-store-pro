import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getAllProducts() {
    return this.http.get<Product[]>('./assets/data/products.json');
  }

  getProduct(id: string) {
    return this.getAllProducts()
    .pipe(
      map(products => products.find(item => item.id === parseInt(id, 10)))
    );
  }
}

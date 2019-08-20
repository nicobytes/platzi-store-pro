import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) { }


  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products/`);
  }

  getNewProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products/news/`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.apiUrl}/products/`, product);
  }
}

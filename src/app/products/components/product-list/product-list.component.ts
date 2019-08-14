import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@products/services/products.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@products/services/products.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products.slice(0, 3);
    });
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products.service';
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
    this.productsService.getNewProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}

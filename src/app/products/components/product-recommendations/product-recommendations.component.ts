import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@products/services/products.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.scss']
})
export class ProductRecommendationsComponent implements OnInit {

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

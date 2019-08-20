import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id || null;
      if (id) {
        this.fetchProduct(id);
      }
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

}

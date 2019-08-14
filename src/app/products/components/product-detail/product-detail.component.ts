import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '@products/services/products.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.productsService.getProduct(this.id)
    .subscribe(product => {
      this.product = product;
    });
  }

}

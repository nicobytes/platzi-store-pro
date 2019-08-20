import { Component, OnInit } from '@angular/core';

import { CartService } from '@core/services/cart.service';
import { Product } from '@core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}

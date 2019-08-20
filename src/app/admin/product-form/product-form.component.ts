import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value)
      .subscribe(rta => {
        console.log(rta);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      price: [0, [Validators.required]],
      colors: [null],
      description: [null, [Validators.required]],
      count: [1, [Validators.required]],
      image: [null],
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [SliderComponent, LayoutComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }

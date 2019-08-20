import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '@website/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'stores',
        loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

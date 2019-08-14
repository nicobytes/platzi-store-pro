import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatListModule,
    LayoutModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
})
export class MaterialModule { }

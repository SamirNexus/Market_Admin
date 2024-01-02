import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }

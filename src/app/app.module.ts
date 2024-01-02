import { AllProductsComponent } from './products/components/all-products/AllProductsComponent';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './carts/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    SharedModule,
    CartsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

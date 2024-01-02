import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsInASpecificCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+ keyword)
  }
  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
  creatAnewProduct(modal:any){
    return this.http.get('https://fakestoreapi.com/products/',modal)
  }
}

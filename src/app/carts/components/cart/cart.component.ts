import { FormBuilder, FormGroup } from '@angular/forms';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html' ,
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private service:CartsService ,private build:FormBuilder , private ProductsService:ProductsService){}
  carts:any[]=[]
  form!:FormGroup
  products:any[]=[]
  details:any
  ngOnInit():void{
    this.form = this.build.group({
      start:[''],
      end:['']
    })
  this.getAllCarts()
  }
getAllCarts(){
  this.service.getAllCarts().subscribe((res:any)=>{
    this.carts=res
  
})
}
applyfilter(){
  let date = this.form.value
  this.service.getAllCarts(date).subscribe((res:any)=>{
    this.carts=res
})
}
deleteCart(id:number){
  this.service.deleteCart(id).subscribe(res=>{
    this.getAllCarts()
    alert('Deleted Successfully')
  
})

}
view(index:number){
  this.products=[]
  this.details=this.carts[index]
  //it false becouse it do many request but i do it to avoid proplem in api 
  for(let x in this.details.products){
    this.ProductsService.getProductById(this.details.products[x].productId).subscribe(res=>{
      this.products.push({item:res,quantity:this.details.products[x].quantity})
    })
  }
  console.log(this.details)
}
}


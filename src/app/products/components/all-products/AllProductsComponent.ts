import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
[x: string]: any;
  
  products:any[] = [];
  categorise:string[] = [];
  loading:boolean = false;
  base64:any =''
  form!:FormGroup
  cartProducts:any[]=[];
 

  constructor(private service: ProductsService , private build:FormBuilder) { }
   ngOnInit(): void {
    this.form = this.build.group({
      title:['', [Validators.required]] ,
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts();
    this.getCategories();
    
  }
  getProducts() {
    this.loading = true
    this.service.getAllproducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false
    }
   ,error=>{
    alert(error)
   });
  }
  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categorise = res;
      this.loading = false
      console.log(res)
    }
   ,error=>{
    this.loading = false
   alert(error)
   });
}
getselectedCategory(event:any){
this.form.get('category')?.setValue(event)
}


getImagePath(event:any){
  const file = event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () =>{
this.base64 =reader.result;
this.form.get('image')?.setValue(this.base64)
};
}


addProduct(){
  const modal = this.form.value
  this.service.creatAnewProduct(modal).subscribe(res=>{
    alert('ADD PRODUCT SUCCESS')
  })
  console.log(this.form)
}
update(item:any){
  this.form.patchValue({
    title:item.title ,
    price:item.price,
    description: item.description,
    image:item.image,
    category:item.category
  })
  this.base64 = item.image
}
}
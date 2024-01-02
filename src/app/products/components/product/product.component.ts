import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{
@Input() data:any={}
@Output()item = new EventEmitter
addBtn:boolean = false;
amount:number=0;
constructor(){}
ngOnInit(): void {
}
add(){
this.item.emit({item:this.data,quantity:this.amount})
}
}

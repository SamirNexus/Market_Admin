import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent  {
  @Input()title:string = ""
  @Input()data:any[]=[]
  @Input()all:boolean = true
  @Input()select=''
  @Output()selectedValue = new EventEmitter

  constructor(){}
  ngOnint(): void{}
  detectChanges(event:any){
   this.selectedValue.emit(event)
    
  }
}


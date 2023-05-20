import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  isValidId:boolean = true;
  isOn:boolean =true;
  show:boolean =false;
  color:string ="pink";

  constructor() { }

  update():void{
    this.isOn = !this.isOn;
  }

  toggle():void{
    this.show = ! this.show;
  }

  ngOnInit(): void {
  }

}

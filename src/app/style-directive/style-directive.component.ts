import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.css']
})
export class StyleDirectiveComponent implements OnInit {

  myColor:string =  'blue';
  fontSize:string = '50px';
  bgColor:string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor():void{
    this.myColor = 'green';
  }

}

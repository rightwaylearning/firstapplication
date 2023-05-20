import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  myArray:number[] = [1,2,3,4,5,6,7,8,9,10];

  employeeInfo:any[] =[
    {
      name:"Raghu",
      age:23,
      salary:234567
    },
    {
      name:"Meena",
      age:25,
      salary:156789
    },
    {
      name:"Madhu",
      age:21,
      salary:90000
    },
    {
      name:"Sunil",
      age:34,
      salary:290876
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

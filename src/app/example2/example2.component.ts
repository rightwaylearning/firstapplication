import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  studentInfo:Student[] = [
    { 
      rollNumber:23,
      name:"Madhu",
      age:20,
      subject:[
        {
          subjectName:"Maths",
          marks:90
        },
        {
          subjectName:"Java Language",
          marks:80
        },
        {
          subjectName:"Science",
          marks:97
        }
      ]
    },
    { 
      rollNumber:24,
      name:"Meena",
      age:27,
      subject:[
        {
          subjectName:"Marathi",
          marks:100
        },
        {
          subjectName:"C Language",
          marks:88
        }      
      ]
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }



}

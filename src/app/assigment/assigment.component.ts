import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent  {

  fName:string = '';
  lName:string ='';
  age:number=0;
  myCustomerRecords:Customer[] = [];

  

  addData():void{
     let obj:Customer = {
        fisrtName:this.fName,
        lastName:this.lName,
        age:this.age
     }
     this.myCustomerRecords.push(obj);
     this.clearFiled();    
 }

  clearFiled():void{
    this.fName = '';
    this.lName = '';
    this.age =0;
  }

}

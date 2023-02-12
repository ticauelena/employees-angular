import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
employees = [{  
  "name" : "Rita Harford",
  "gender" : "F",
  "email" : "rita@gmail.com",
  "phone" : "021312313",
  "hireDate" : "11-10-2011",
  "workeedType" : "In the office",
  "salary" : 55555,
  "isEmployee" : true
}, {  
  "name" : "Margaret Richard",
  "gender" : "F",
   "email" : "margaret@gmail.com",
   "phone" : "0345535398783",
   "hireDate" : "05-01-2013",
   "workeedType" : "Online",
   "salary" : 53000,
   "isEmployee" : true
 }, {  
  "name" : "Marius Michel",
  "gender" : "M",
   "email" : "marius@gmail.com",
   "phone" : "0231063",
   "hireDate" : "08-08-2017",
   "workeedType" : "In the office",
   "salary" : 18000,
   "isEmployee" : false
 }, {  
  "name" : "Laura Michel",
  "gender" : "F",
   "email" : "laura@gmail.com",
   "phone" : "080097897896",
   "hireDate" : "02-02-2012",
   "workeedType" : "In the office",
   "salary" : 28000,
   "isEmployee" : true
 }, {  
  "name" : "Mihail Condrad",
  "gender" : "N",
   "email" : "mihail@gmail.com",
   "phone" : "021312313",
   "hireDate" : "08-08-2014",
   "workeedType" : "Hybrid",
   "salary" : 40000,
   "isEmployee" : false
 }, {  
  "name" : "Ana Lisa",
  "gender" : "F",
   "email" : "na@gmail.com",
   "phone" : "47777687564",
   "hireDate" : "11-08-2019",
   "workeedType" : "Online",
   "salary" : 10000,
   "isEmployee" : true
 }];
}	
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
employees = {  
 "name" : "Rita Harford",
 "gender" : "F",
  "email" : "rita@gmail.com",
  "phone" : "021312313",
  "hireDate" : "11-10-2011",
  "workeedType" : "In the office",
  "salary" : 55555,
  "isEmployee" : true
};
}



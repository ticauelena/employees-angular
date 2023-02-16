import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  data = {
    "name": "Rita Harford",
    "gender": "F",
    "email": "rita@gmail.com",
    "phone": "021312313",
    "hireDate": "11-10-2011",
    "workeedType": "In the office",
    "salary": 55555,
    "isEmployee": true
  }
}
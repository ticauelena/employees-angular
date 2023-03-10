import { Component } from '@angular/core';
import { HttpService } from 'src/app/http-service.service';
import { Employee } from './model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:  any = null;

  constructor(private httpS: HttpService, private router: Router) {
    this.getAllEmployees();
  }
  
  getAllEmployees() {
    this.httpS.getAll().subscribe(rs => this.employees = rs)
  }  

  deleteEmployee(employee: any) {
    if (confirm(`Are you sure that you want to delete ${employee.employeeName}?`)) {
      this.httpS.deleteById(employee.id).subscribe(rs => {
        console.log(rs)
        this.getAllEmployees();
      })
    }
  }
}
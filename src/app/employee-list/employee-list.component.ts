import { Component } from '@angular/core';
import { HttpService } from 'src/app/http-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any = null;

  constructor(private httpS: HttpService) {
    this.getAllEmployees();
  }
  
  getAllEmployees() {
    this.httpS.getAll().subscribe(emp => this.employees = emp)
  }  
}
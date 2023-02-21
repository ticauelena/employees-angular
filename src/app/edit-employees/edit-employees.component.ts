import { Component } from '@angular/core';
import { Employee } from 'src/app/employee-list/model/employee';
import { HttpService } from 'src/app/http-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent {
  employee: Employee = new Employee();
  
  constructor(private route: ActivatedRoute, private httpS: HttpService, private router: Router) {
    let employeeId = route.snapshot.paramMap.get('id');

    if (employeeId) {
      httpS.getById(employeeId).subscribe((employee: any) => {
        this.employee = employee;
      })
    }
  }

  submitEmployee() {
    console.log("Employee to be saved: " + this.employee);
    if (this.employee.id) {
      this.httpS.edit(this.employee).subscribe(rs => {
        this.router.navigate(['/employee-list']);
      });
    } else {
      this.httpS.create(this.employee).subscribe(rs => {
        this.router.navigate(['/employee-list']);
      });
    }
  }
}

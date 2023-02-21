import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create', component: EditEmployeesComponent },
  { path: 'edit/:id', component: EditEmployeesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

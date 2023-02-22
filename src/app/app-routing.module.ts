import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create', component: EditEmployeesComponent },
  { path: 'edit/:id', component: EditEmployeesComponent },
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

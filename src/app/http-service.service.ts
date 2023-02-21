import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-list/model/employee';



const SERVER_URL = "http://localhost:8080/employees/";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(SERVER_URL);
  }

  getById(id: any) {
    return this.http.get(SERVER_URL + id);
  }

  deleteById(id: any) {
    return this.http.delete(SERVER_URL + 'delete/' + id);
  }

  create(employee: Employee) {
    return this.http.post(SERVER_URL, employee);
  }

  edit(employee: Employee) {
    return this.http.put(SERVER_URL + 'update/' + employee.id, employee);
  }
}

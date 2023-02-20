import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const SERVER_URL = "http://localhost:8080/employees/";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(SERVER_URL);
  }

  deleteById(id: any) {
    return this.http.delete(SERVER_URL + 'delete/' + id);
  }
}

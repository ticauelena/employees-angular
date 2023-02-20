import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SERVER_URL = "http://localhost:8080/employees/";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(SERVER_URL);
  }
}

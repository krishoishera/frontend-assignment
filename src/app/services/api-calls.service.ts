import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeData} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class APICALLSService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<{"data": EmployeeData[],"status":string}>('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmployee(id: number) {
    return this.http.get<{status: string, data: EmployeeData}>('http://dummy.restapiexample.com/api/v1/employee/'+id);
  }

  addEmployee(employee: EmployeeData) {
    return this.http.post<{status: string, data: EmployeeData}>('http://dummy.restapiexample.com/api/v1/create', employee);
  }

  deleteEmployee(id?: number) {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id);
  }
}

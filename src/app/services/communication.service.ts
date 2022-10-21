import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {EmployeeData} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  currentEmployee = new BehaviorSubject<EmployeeData>({id: 0, employee_name: 'demo', employee_salary: 10, employee_age: 10, profile_image: ''});

  constructor() { }

  changeEmployee(employee: EmployeeData) {
    this.currentEmployee.next(employee);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeData} from "../../models/Employee";
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: EmployeeData;
  constructor(private router: Router, private route: ActivatedRoute, private communcation: CommunicationService) { }

  ngOnInit(): void {
    this.communcation.currentEmployee.subscribe(data => {
      this.employee = data;
    });
  }

}

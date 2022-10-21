import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {APICALLSService} from "../../services/api-calls.service";
import {EmployeeData} from "../../models/Employee";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addForm = new FormGroup({
    employee_name: new FormControl('', Validators.required),
    employee_salary: new FormControl(0, Validators.required),
    employee_age: new FormControl(0, Validators.required),
  });
  constructor(private api: APICALLSService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.api.addEmployee(<EmployeeData>this.addForm.value).subscribe(res => {
      this._snackBar.open(res.status, 'Close');
    }, err => {
      this._snackBar.open(err.message, 'Close');
    });
  }


}

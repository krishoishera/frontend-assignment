import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeData} from "../../models/Employee";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {APICALLSService} from "../../services/api-calls.service";
import {AddEmployeeComponent} from "../add-employee/add-employee.component";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'remove'];
  employees: EmployeeData[] = [];
  dataSource = new MatTableDataSource<EmployeeData>(this.employees);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private router: Router,
              private api: APICALLSService, private _liveAnnouncer: LiveAnnouncer,
              private communcation: CommunicationService) { }

  ngOnInit(): void {
    this.api.getEmployees().subscribe({
      next: (data) => {
        this.employees = data.data;
        this.dataSource = new MatTableDataSource<EmployeeData>(this.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open(err.message, 'Close', {duration: 3000});
      }
    });
  }

  RemoveEmployee(index: number) {
    this.api.deleteEmployee(this.employees[index].id).subscribe({
      next: () => {
        this._snackBar.open("Employee removed", 'Close', {duration: 3000});
        this.employees.splice(index, 1);
        this.dataSource = new MatTableDataSource<EmployeeData>(this.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open(err.message, 'Close', {duration: 3000});
      }
    });
  }

  EmployeData(id: number) {
    this.api.getEmployee(id).subscribe({
      next: (data) => {
        this.communcation.changeEmployee(data.data);
        this.router.navigate(['home/employees/' + id]).then(r => console.log(r));
      }, error: (err) => {
        this._snackBar.open(err.message, 'Close', {duration: 3000});
      }
    });
  }

}

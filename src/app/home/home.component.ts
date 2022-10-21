import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {Router} from "@angular/router";
import {APICALLSService} from "../services/api-calls.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private router: Router, private api: APICALLSService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLogout() {
    this.router.navigate(['']).then(r => console.log(r));
  }

}

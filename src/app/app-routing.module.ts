import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeDetailsComponent} from "./home/employee-details/employee-details.component";
import {MainPageComponent} from "./home/main-page/main-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/employees', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
      { path: 'employees', component: MainPageComponent},
      { path: 'employees/:id', component: EmployeeDetailsComponent },
    ]},

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

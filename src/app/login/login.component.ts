import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      emailaddress: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['/home']).then(r => console.log(r));
  }

}

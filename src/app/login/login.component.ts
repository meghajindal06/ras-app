import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../login';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : LoginForm = {} ;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
      this.loginService
          .login(this.loginForm)
          .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.loginForm)}`));
    }

}
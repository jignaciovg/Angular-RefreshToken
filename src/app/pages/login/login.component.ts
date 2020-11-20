import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {LoginService} from '../../services/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    Password: new FormControl('')
  })

  constructor(private _LoginService:LoginService) { }



  ngOnInit(): void {
  }

  onLogin(){
    let {userName,Password} = this.loginForm.value;
    console.log(this.loginForm.value);
    this._LoginService.login(this.loginForm.value);
  }
}

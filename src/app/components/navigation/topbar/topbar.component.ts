import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/core/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isToken;

  constructor(private _LoginService:LoginService) {
    this.validarToken();
   }

  ngOnInit(): void {
    this.validarToken();
  }

  onLogout(){
    this._LoginService.logOut();
  }

  validarToken(){
    var token = localStorage.getItem('jwt');
    var refreshtoken = localStorage.getItem('refreshToken');
    console.log('token '+ token);
    console.log('refreshToken '+ refreshtoken);

    if(token == '' || token == null || token == undefined){
      this.isToken = false;
    }else{
      this.isToken = true;
    }
  }
}

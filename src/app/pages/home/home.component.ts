import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isToken;
  token;
  refreshtoken;
  constructor() {this.validarToken();}

  ngOnInit(): void {
    this.validarToken();
  }

  validarToken(){
    this.token = localStorage.getItem('jwt');
    this.refreshtoken = localStorage.getItem('refreshToken');
    console.log('token '+ this.token);
    console.log('refreshToken '+ this.refreshtoken);

    if(this.token == '' || this.token == null || this.token == undefined){
      this.isToken = false;
    }else{
      this.isToken = true;
    }
  }
}

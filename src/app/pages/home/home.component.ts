import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isToken;
  ngOnInit(): void {
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

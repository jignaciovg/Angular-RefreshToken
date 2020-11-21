import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private _router:Router) { }

  invalidLogin;

  public login = (form: NgForm) => {
    let credentials = JSON.stringify(form);
    console.log('CREDENCIALES '+ credentials);

    this.http.post("https://localhost:44333/api/auth/login",
    credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      const refreshToken = (<any>response).refreshToken;
      localStorage.setItem("jwt", token);
      localStorage.setItem("refreshToken", refreshToken);
      console.log('Inicio sesion');
      console.log(token);
      this.invalidLogin = false;
      this._router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
      console.log('No se pudo iniciar sesion');

    });
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    let token = localStorage.getItem('jwt');
    console.log('Token borrado exitosamente '+token);
    this._router.navigate(["/"]);
  }
}

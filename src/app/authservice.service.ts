import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  username = "ddd";
  password = "sss";
  un: any;
  pw: any;
  isCorrect = false;
  isLoggedOut = false;

  constructor() { }

  login(){
    if(this.un == this.username && this.pw == this.password && this.isLoggedOut === false ){ this.isCorrect = true; }
    else if(this.isLoggedOut === true)
    { this.isCorrect = false}

    return this.isCorrect;
  }



}

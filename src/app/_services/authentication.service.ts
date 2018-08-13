import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor() { }

  isUserExist(username: string) : boolean{
    return localStorage.getItem(username) !== null ? true : false;
  }

  login(username: string){
    localStorage.setItem(username,username);
  }
  
  logout(username: string){
    localStorage.removeItem(username);
  }
}
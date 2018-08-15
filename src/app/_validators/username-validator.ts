import { Injectable, Directive } from '@angular/core';
import { ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
 
export class UsernameValidator { 
  static checkUsername(authenticationService: AuthenticationService): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
       return authenticationService.isUserExist(control.value) == true ? { userAlreadyExist : true} : null;
      }
    };
}
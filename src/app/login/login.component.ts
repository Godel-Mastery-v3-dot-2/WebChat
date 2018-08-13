import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { UsernameValidator } from '../_validators/username-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { 
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3), UsernameValidator.checkUsername(this.authenticationService)])]
    });
  }
  
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
        return;
      }
      
      this.authenticationService.login(this.f.name.value);
    }
  }
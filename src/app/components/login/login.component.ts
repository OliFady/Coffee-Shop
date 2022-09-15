import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private login : AuthService, private router : Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
    })
  }

  onSubmit(){
    this.login.login(this.loginForm.value).subscribe(_ =>{
      console.log(this.loginForm.value)
      //localStorage.setItem('access_token', data.idToken);
      this.router.navigate(['/'])
    })
  }


}

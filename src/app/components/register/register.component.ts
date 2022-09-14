import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  //reg : register;

  constructor(private register : AuthService, private router : Router) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      name : new FormControl(),
      email : new FormControl(),
      password : new FormControl()
    })
  }

  /*addHero(){
  this.register = this.register.value;
  this.register.addHero(this.register).subscribe((response: any) => {
    console.log(response);
  });
}*/

onSubmit(){
  console.log(this.registerForm.value)
  this.register.register(this.registerForm.value).subscribe(_ =>{
    this.router.navigate(['/login'])
  })
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.register = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      username : new FormControl(),
      password : new FormControl()
    })
  }

  onSubmit(){
    console.log(this.register.value)
  }

}

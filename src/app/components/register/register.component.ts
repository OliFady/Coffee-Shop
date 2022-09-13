import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register!: FormGroup;
  //reg : register;

  constructor() { }

  ngOnInit(): void {

    this.register = new FormGroup({
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
    console.log(this.register.value)
  }

}

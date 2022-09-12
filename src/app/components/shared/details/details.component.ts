import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isactive = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(){
    if (this.isactive == false)
    this.isactive = true;

    else{
      this.isactive = false
    }
  }

}

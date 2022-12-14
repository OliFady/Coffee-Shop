import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isactive = false;
  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );

   }

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

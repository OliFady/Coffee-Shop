import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  filter : any;
  data : any;
  source : any;
  constructor(private api : ProductService,private route : ActivatedRoute) {

   }

   product : any;
   productId : any;
   isactive = false;

  ngOnInit(): void {
    this.api.getProducts().subscribe(products =>{
      this.source = products ;
    })

  }

  getallproducts(){
    this.api.getProducts().subscribe(products =>{
      this.source = products ;
    })
  }


  toggleClass(){
    if (this.isactive == false)
    this.isactive = true;

    else{
      this.isactive = false
    }
  }



}

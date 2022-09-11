import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  source : any;
  constructor(private api : ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(products =>{
      this.source = products ;
      console.log(this.source)
    })
  }

}

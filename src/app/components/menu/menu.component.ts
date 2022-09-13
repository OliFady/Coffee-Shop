import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  searchFilter : any;
  data : any;
  source : any;
  constructor(private api : ProductService) {

   }

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

  get products(){
    return this.source ? 
    this.source.filter((product: { name: string | any[]; }) => 
    this.searchFilter ?
    product.name.includes(this.searchFilter ) 
    :product)
    : this.source
 }
}

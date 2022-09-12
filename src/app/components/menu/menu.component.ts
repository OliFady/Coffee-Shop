import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  filter : any;
  source : any;
  constructor(private api : ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(products =>{
      this.source = products ;
    })
  }

  get products(){
    return this.source ? 
    this.source.filter((product: { name: { common: string | any[]; }; }) => 
    this.filter ?
    product.name.common.includes(this.filter ) 
    :product)
    : this.source
 }
}

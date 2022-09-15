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
   this.getallproducts()
  }

  getallproducts(){
    this.api.getProducts().subscribe(products =>{
      this.source = products ;
    })
  }

  getproducts(searchFilter : string){
    // return this.source ? this.source.filter((product : any) => 
    // this.searchFilter ?product.name.includes(searchFilter.toLocaleLowerCase()) : product)
    // : this.source
    if(this.searchFilter !== ''){
    this.source = this.source.filter((res : any) => 
     res.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())  )  
    }
    else {
      this.getallproducts()
    }
  }
    
}

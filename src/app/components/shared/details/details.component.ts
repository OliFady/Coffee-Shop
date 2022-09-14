import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  source : any;
  constructor(private api : ProductService,private route : ActivatedRoute, private cartService: CartService) {
   }

   addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

   productId : any;

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id']

    console.log(this.productId)
    this.api.getOne(this.productId).subscribe(products =>{
      this.source = products ;
    })


  }



  Price = 0;
  quantity= 0;
  value= 0;
  selectedTeam = '';

	onSelected(value:string): void {
		this.selectedTeam = value;

    if (this.selectedTeam == 'Small'){
    this.Price=10;
    }
     else if (this.selectedTeam == 'Medium'){
     this.Price=15;
     }
    else {
    this.Price=20;
    }
	}

  onKey(event: any) {
    this.quantity = Number(event.target.value);
    this.Price= this.Price * this.quantity
    this.quantity = 1
  }



}

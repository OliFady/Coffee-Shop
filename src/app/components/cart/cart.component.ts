import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  constructor(private cartService: CartService,private route:ActivatedRoute) { }

    
    price : any;
    items = this.cartService.getItems();

  ngOnInit(): void {
    console.log(this.items)
    this.price = this.route.snapshot.params['price']
  }

  clear (){
    this.cartService.clearCart()
  }

}

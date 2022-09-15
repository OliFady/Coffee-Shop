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
    total : any;
    items = this.cartService.getItems();
    ctr = this.cartService.getctr();

  ngOnInit(): void {
    this.price = this.route.snapshot.params['price']
    this.total = this.price * this.ctr;
  }

  clear (){
    this.cartService.clearCart()
    window.location.reload()
  }

}

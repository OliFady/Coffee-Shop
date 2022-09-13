import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private api = "https://coffee-shop2022.herokuapp.com/product/get";

  constructor(private http : HttpClient) {}

  getProducts(){
    return this.http.get(`${this.api}`);
  }

}

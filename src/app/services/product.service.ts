import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private api = "https://coffee-shop2022.herokuapp.com/product/get";

  constructor(private http : HttpClient) {}

  getProducts(){
    return this.http.get(`${this.api}`);
  }

  getProductByName(name : string){
    return this.http.get<Product[]>(`${this.api}/${name}`).pipe(
      map(([res])=> res)
    );
  }

}

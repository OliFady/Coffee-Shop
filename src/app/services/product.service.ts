import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = "https://restcountries.com/v3.1/all";

  constructor(private http : HttpClient) {}

  getProducts(){
    return this.http.get(`${this.api}`);
  }
}

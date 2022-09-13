import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = 'https://coffee-shop2022.herokuapp.com';

  constructor(private http : HttpClient) { }


  register(reg: Object): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, reg)
  }

  login(reg: Object): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, reg)
  }

}





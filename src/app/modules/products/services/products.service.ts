import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlBase = 'https://backend-fastapi-python.azurewebsites.net/api/product/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });
    return this.http.get<ProductResponse>(this.urlBase + 'all', {headers: headers}) 
  }

  postProduct(product: Product): Observable<ProductResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });    
    return this.http.post<ProductResponse>(this.urlBase, product, {headers: headers})
  }
}

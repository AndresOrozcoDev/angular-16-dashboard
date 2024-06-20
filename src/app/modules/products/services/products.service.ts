import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlBase = 'https://backend-fastapi-python.azurewebsites.net/api/product/all';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': 'development'
    });
    return this.http.get<ProductResponse>(this.urlBase, {headers: headers}) 
  }
}

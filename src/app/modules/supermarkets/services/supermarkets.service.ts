import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupermarketResponse } from '../models/supermarkets';

@Injectable({
  providedIn: 'root'
})
export class SupermarketsService {

  urlBase = 'https://backend-fastapi-python.azurewebsites.net/api/supermarket/';

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<SupermarketResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': 'development'
    });
    return this.http.get<SupermarketResponse>(this.urlBase + 'all', {headers: headers}) 
  }

  postSupermarket(name: string): Observable<SupermarketResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': 'development'
    });    
    return this.http.post<SupermarketResponse>(this.urlBase, name, {headers: headers})
  }

}

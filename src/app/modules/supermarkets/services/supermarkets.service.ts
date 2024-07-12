import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupermarketResponse } from '../models/supermarkets';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupermarketsService {

  urlBase = environment.backendUrl + '/api/supermarket';

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<SupermarketResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });
    return this.http.get<SupermarketResponse>(this.urlBase + '/all', {headers: headers}) 
  }

  postSupermarket(name: string): Observable<SupermarketResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });    
    return this.http.post<SupermarketResponse>(this.urlBase, name, {headers: headers})
  }

  deleteSupermarket(SupermarketID?: number): Observable<SupermarketResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });    
    return this.http.delete<SupermarketResponse>(this.urlBase + "/" + SupermarketID, {headers: headers})
  }

}

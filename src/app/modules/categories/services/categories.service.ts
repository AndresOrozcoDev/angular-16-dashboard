import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlBase = 'https://backend-fastapi-python.azurewebsites.net/api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': 'development'
    });
    return this.http.get<CategoryResponse>(this.urlBase + '/all', {headers: headers}) 
  }

  postCategories(name: string): Observable<CategoryResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': 'development'
    });    
    return this.http.post<CategoryResponse>(this.urlBase, name, {headers: headers})
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../models/categories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlBase = environment.backendUrl + '/api/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });
    return this.http.get<CategoryResponse>(this.urlBase + '/all', {headers: headers}) 
  }

  postCategories(name: string): Observable<CategoryResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });    
    return this.http.post<CategoryResponse>(this.urlBase, name, {headers: headers})
  }

  deleteCategory(categorytID?: number): Observable<CategoryResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'API_KEY': 'development'
    });    
    return this.http.delete<CategoryResponse>(this.urlBase + "/" + categorytID, {headers: headers})
  }

}

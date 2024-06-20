import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlBase = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.urlBase) 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilesResponse } from '../models/files';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlBase = environment.backendUrlExpress;

  constructor(private http: HttpClient) { }

  uploadPhoto(file: FormData): Observable<FilesResponse> {
    return this.http.post<FilesResponse>(this.urlBase + "/upload", file);
  }
}

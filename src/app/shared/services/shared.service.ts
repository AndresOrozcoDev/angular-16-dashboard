import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private booleanSource = new Subject<boolean>();
  boolean$ = this.booleanSource.asObservable();

  sendBoolean(value: boolean) {
    this.booleanSource.next(value);
  }

  constructor() { }
}

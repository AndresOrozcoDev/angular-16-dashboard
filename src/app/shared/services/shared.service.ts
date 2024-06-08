import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedBoolean: boolean = false;

  constructor() {}

  setBoolean(value: boolean) {
    this.sharedBoolean = value;
  }

  getBoolean() {
    return this.sharedBoolean;
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidebarExpanded: boolean = false;
  isLogged: boolean = true;
  subscription: Subscription = new Subscription();

  constructor(private sharedServices: SharedService) {}

  ngOnInit() {
    this.subscription = this.sharedServices.boolean$.subscribe(
      value => this.sidebarExpanded = value
    );
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('user');
  }

}

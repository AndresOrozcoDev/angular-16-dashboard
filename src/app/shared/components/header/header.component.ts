import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isExpanded: boolean = false
  authUser$!: Observable<boolean>;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  ngOnInit() {
    this.authUser$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}

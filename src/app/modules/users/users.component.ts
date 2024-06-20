import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { UsersService } from './services/users.service';
import { User } from './models/users';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: Array<User> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor( private usersServices: UsersService, private notifyService: NotifyService) {
      this.getUsers();
    }

  openmodal() {
    this.modalComponent.openModal();
  }

  getUsers() {
    this.usersServices.getUsers().subscribe( (resp) => {
      this.users = resp.results;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}

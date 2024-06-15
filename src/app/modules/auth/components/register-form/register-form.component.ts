import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  
  constructor(private router: Router, private notify: NotifyService) { }

  register() {    
    if(this.registerForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.registerForm.value))
      this.router.navigate(['/mod1']);
    } else {
      this.notify.notify('Empty fields.', 'error')
    }
  }

}

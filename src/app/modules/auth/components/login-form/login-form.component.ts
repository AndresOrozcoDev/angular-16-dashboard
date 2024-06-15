import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  

  constructor(private router: Router,) { }

  signin() {    
    if(this.loginForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.loginForm.value))
      this.router.navigate(['/mod1']);
    } else {
      // this.notify.notify('Empty fields.', 'error')
    }
  }
}

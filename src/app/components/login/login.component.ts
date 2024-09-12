import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.controls.email.value;
      const password = this.form.controls.password.value;

      if (email && password) {
        this.authService
          .login({ email, password })
          .subscribe(() => this.router.navigate(['/']));
      }
    }
  }
}

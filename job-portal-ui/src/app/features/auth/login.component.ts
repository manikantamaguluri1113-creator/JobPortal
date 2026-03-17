import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LoginResponse } from '../../core/models/login-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>

    <form (ngSubmit)="login()">
      <input type="email" [(ngModel)]="email" name="email" required />
      <input type="password" [(ngModel)]="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: LoginResponse) => {
        //this.authService.saveAuthData(res);
        this.router.navigate(['/']);
      },
      error: () => alert('Invalid credentials')
    });
  }
}

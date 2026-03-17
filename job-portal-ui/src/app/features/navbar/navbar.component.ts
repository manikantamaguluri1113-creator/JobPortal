import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get role(): string | null {
    return this.authService.getRole();
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  isHr(): boolean {
    return this.role === 'HR';
  }

  isCandidate(): boolean {
    return this.role === 'CANDIDATE';
  }

  goToJobs(): void {
    if (this.isCandidate()) {
      this.router.navigate(['/candidate/jobs']);
    } else {
      this.router.navigate(['/jobs']);
    }
  }

  goToAppliedJobs(){
    const role = this.authService.getRole();
    if(role === 'CANDIDATE'){
    this.router.navigate(['/candidate/applied']);
    }
  }
  goToDashboard() {
    const role = this.authService.getRole();

    if (role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else if (role === 'HR') {
      this.router.navigate(['/hr']);
    } else if (role === 'CANDIDATE') {
      this.router.navigate(['/candidate/jobs']);
    }
  }

   get loggedInText(): string {
    const roleLabel = this.authService.getRoleLabel();
    const email = this.authService.getEmail();

    if (!roleLabel) return '';

    // Candidate → show email
    if (roleLabel === 'Candidate' && email) {
      return `Logged in as Candidate (${email})`;
    }

    return `Logged in as ${roleLabel}`;
  }

  logout(): void {
    const role = this.authService.getRole();
    this.authService.logout();

    if (role === 'CANDIDATE') {
      this.router.navigate(['/candidate/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  
}

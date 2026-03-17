import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../../../core/services/candidate.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-candidate-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent {

  fullName = '';
  email = '';
  password = '';

  loading = false;
  success = false;
  error = '';

  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {}

  // register(): void {
  //   this.error = '';
  //   this.loading = true;

  //   this.candidateService.registerCandidate({
  //     fullName: this.fullName,
  //     email: this.email,
  //     password: this.password
  //   }).subscribe({
  //     next: () => {
  //       this.loading = false;
  //       this.success = true;

  //       // redirect after success message
  //       setTimeout(() => {
  //         this.router.navigate(['/candidate/login']);
  //       }, 2000);
  //     },
  //     error: (err) => {
  //       this.loading = false;
  //       this.error = err?.error || 'Registration failed';
  //     }
  //   });
  // }

  register(): void {
  this.error = '';
  this.loading = true;

  this.candidateService.registerCandidate({
    fullName: this.fullName,
    email: this.email,
    password: this.password
  })
  .pipe(
    finalize(() => {
      // ✅ ALWAYS executed (success OR error)
      this.loading = false;
    })
  )
  .subscribe({
    next: () => {
      this.success = true;

      setTimeout(() => {
        this.router.navigate(['/candidate/login']);
      }, 2000);
    },
    error: (err) => {
      this.error = err?.error || 'Registration failed';
    }
  });
}


  isFormInvalid(): boolean {
    return !this.fullName || !this.email || !this.password;
  }
}

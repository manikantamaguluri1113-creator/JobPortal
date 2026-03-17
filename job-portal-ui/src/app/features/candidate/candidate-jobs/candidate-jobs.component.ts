import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CandidateService } from '../../../core/services/candidate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidate-jobs',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './candidate-jobs.component.html',
  styleUrls: ['./candidate-jobs.component.css']
})
export class CandidateJobsComponent implements OnInit {

  jobs: Job[] = [];
  loading = false;
  error = '';
  appliedJobIds: number[] = [];
  successMessage = '';
  constructor(private jobService: JobService,
    private router: Router, 
    private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  private loadJobs(): void {
    this.loading = true;
    this.error = '';

    this.jobService.getAllActiveJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        console.log("canjobs", jobs);
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load jobs';
        this.loading = false;
      }
    });
  }

  // Placeholder — backend apply flow not built yet
  // apply(jobId: number): void {
  //   this.candidateService.applyToJob(jobId)
  //   .subscribe({
  //     next: () => {
  //       this.appliedJobIds.push(jobId);
  //       this.successMessage = 'Applied successfully!';
  //       setTimeout(() => this.successMessage = '', 3000);
  //     },
  //     error: () => {
  //       alert('Failed to apply');
  //     }
  //   });
  // }

  apply(jobId: any) {

  this.candidateService.applyToJob(jobId)
    .subscribe({
      next: () => {

        // Remove job from available list
        this.jobs = this.jobs.filter(job => job.id !== jobId);

        alert('Applied successfully!');

        // Redirect to applied jobs page
        this.router.navigate(['/candidate/applied']);
      },
      error: () => {
        alert('Failed to apply');
      }
    });
}


  isApplied(jobId: any): boolean {
    return this.appliedJobIds.includes(jobId);
  }
}

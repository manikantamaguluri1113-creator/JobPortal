// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../../navbar/navbar.component';
// import { JobService } from '../../../core/services/job.service';
// import { Job } from '../../../core/models/job.model';
// import { HrService } from '../../../core/services/hr.service';

// @Component({
//   selector: 'app-hr-jobs',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent],
//   templateUrl: './hr-jobs.component.html',
//   styleUrls: ['./hr-jobs.component.css']
// })
// export class HrJobsComponent implements OnInit{

//      jobs: Job[] = [];
//     constructor(private jobService: JobService,
//                 private hrService: HrService
//                ){}
//     ngOnInit(): void {
//         this.loadHrJobs();
//     }

//     loadHrJobs() {
//     this.jobService.getJobsByRecruiter().subscribe({
//       next: (data) => {
//         this.jobs = data;
//         console.log("RecJobs",this.jobs);
//       },
//       error: (err) => {
//         console.error('Failed to load jobs', err);
//       }
//     });
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-hr-jobs',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './hr-jobs.component.html',
//   styleUrls: ['./hr-jobs.component.css']
// })
// export class HrJobsComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';

@Component({
  selector: 'app-hr-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr-jobs.component.html',
  styleUrls: ['./hr-jobs.component.css']
})
export class HrJobsComponent implements OnInit {

  jobs: Job[] = [];
  loading = true;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadHrJobs();
  }

  loadHrJobs(): void {
    this.jobService.getJobsByRecruiter().subscribe({
      next: (data) => {
        this.jobs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}

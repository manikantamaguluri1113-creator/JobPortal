// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-jobs',
//   imports: [],
//   templateUrl: './admin-jobs.html',
//   styleUrl: './admin-jobs.css',
// })
// export class AdminJobsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';
import { JobService } from '../../../core/services/job.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-jobs.html',
  styleUrl: './admin-jobs.css'
})
export class AdminJobsComponent implements OnInit {

  jobs: any[] = [];

  constructor(private adminService: AdminService,
              private jobService: JobService,
              private router: Router
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {

    this.jobService.getAllJobs().subscribe({

      next: (data) => {
        this.jobs = data;
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  deleteJob(id: number) {

    if(!confirm("Delete this job?")) return;

    this.adminService.deleteJob(id).subscribe(() => {

      alert("Job deleted");

      this.loadJobs();

    });

  }

  viewApplications(jobId: number) {

    this.router.navigate(['/admin/jobs', 'applications', jobId ]);

  }

}

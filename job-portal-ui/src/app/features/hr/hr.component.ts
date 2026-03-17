// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-hr',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent],
//   templateUrl: './hr.component.html',
//   styleUrls: ['./hr.component.css']
// })
// export class HrComponent {}


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { JobService } from '../../core/services/job.service';
// import { Job } from '../../core/models/job.model';
// import { HrService } from '../../core/services/hr.service';

// @Component({
//   selector: 'app-hr',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent],
//   templateUrl: './hr.component.html',
//   styleUrls: ['./hr.component.css']
// })
// export class HrComponent implements OnInit{

//   jobs: Job[] = [];
//   constructor(private jobService: JobService,
//               private hrService: HrService
//   ) {}

//   activeTab: 'jobs' | 'applications' | 'analytics' = 'jobs';

//   ngOnInit() {
//     this.loadMyJobs();
//   }
  

//   setTab(tab: 'jobs' | 'applications' | 'analytics') {
//     this.activeTab = tab;
//   }

//   loadMyJobs() {
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

//   applications: any[] = [];
// loading = true;

// loadHrJobApplications() {
//   this.hrService.getHrApplications().subscribe(res => {
    
//     this.applications = res;
//     console.log("Hrapplications",this.applications);
//     this.loading = false;
//   });
// }

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent {}

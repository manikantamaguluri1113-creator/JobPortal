// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-job',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent],
//   templateUrl: './job.component.html',
//   styleUrls: ['./job.component.css']
// })
// export class JobComponent {}


import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { JobService } from '../../core/services/job.service';
import { Job } from '../../core/models/job.model';
import { AuthService } from '../../core/services/auth.service';
import { CreateJobComponent } from './create-job.component';
import { UpdateJobComponent } from './update-job/update.job.component';
import { AdminCreateUserComponent } from '../admin/admin-create-user/admin-create-user';
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CreateJobComponent, UpdateJobComponent, AdminCreateUserComponent],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Input() visible = false;

  jobs: Job[] = [];
  showCreateJobModal = false;
  showCreateUserDialog = false;
  loading = false;
  errorMessage = '';
  selectedJob?: Job;
  showUpdateModal = false;
  disableUpdate = true;

  newUser = {
  fullName: '',
  email: '',
  password: '',
  role: 'HR'
};
  
  constructor(private jobService: JobService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
   this.fetchJobs();
   //this.loadJobs();
  }

  private fetchJobs(): void {
    this.loading = true;

    this.jobService.getAllJobs().subscribe({
      next: (jobs: Job[]) => {
        // if(jobs){
        //   this.loading = false;
        // }
        this.jobs = jobs;
        console.log("jobs", this.jobs);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load jobs';
        this.loading = false;
      }
    });
  }

  canCreateJob(): boolean {
    return this.authService.isAdmin() || this.authService.isHr();
  }

  canCreateHr(): boolean{
    return this.authService.isAdmin();
  }

  openCreateJob() {
    this.showCreateJobModal = true;
  }
  loadJobs() {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.jobs = jobs;
    });}
  
  closeCreateJob(refresh?: boolean) {
  this.showCreateJobModal = false;

  if (refresh) {
    this.loadJobs();
  }
}

  openUpdate(job: Job) {
  this.selectedJob = { ...job };
  this.showUpdateModal = true;
}

closeUpdate(refresh: boolean) {
  this.showUpdateModal = false;
  this.selectedJob = undefined;
  if (refresh) this.loadJobs();
}

canEdit(job: Job): boolean {
  const role = this.authService.getRole();
  const userId = Number(sessionStorage.getItem('userId'));
  return role === 'ADMIN' || (role === 'HR' && job.recruiterId === userId);
}

openCreateUser(){
  this.showCreateUserDialog = true;
}

closeCreateUserDialog(refresh?: boolean) {
  this.showCreateUserDialog = false;

  if (refresh) {
    this.loadJobs();   // optional refresh
  }
}

}

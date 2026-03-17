import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-admin-job-applications',
  standalone: true,
  imports: [CommonModule, DatePipe, NavbarComponent],
  templateUrl: './admin-job-applications.html',
  styleUrl: './admin-job-applications.css'
})
export class AdminJobApplicationsComponent implements OnInit {

  jobId!: number;

  applications: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit() {
    console.log("adminJobApplications");

   // this.jobId = Number(this.route.snapshot.paramMap.get('jobId'));

   this.route.paramMap.subscribe(params => {

    this.jobId = Number(params.get('jobId'));
    
    this.loadApplications();
  });
    

  }

  goBack(){
  this.location.back();
}

  loadApplications(){

    this.adminService.getApplicationsByJob(this.jobId)
    .subscribe({

      next:(data)=>{
        this.applications = data;
        console.log("applicants", this.applications);
        this.cdr.detectChanges();
      },

      error:(err)=>{
        console.error(err);
      }

    });

  }

  trackById(index: number, item: any){
  return item.id;
}

}

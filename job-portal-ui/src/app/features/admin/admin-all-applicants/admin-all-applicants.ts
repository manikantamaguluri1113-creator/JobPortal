// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-all-applicants',
//   imports: [],
//   templateUrl: './admin-all-applicants.html',
//   styleUrl: './admin-all-applicants.css',
// })
// export class AdminAllApplicantsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-all-applicants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-all-applicants.html',
  styleUrls: ['./admin-all-applicants.css']
})
export class AdminAllApplicantsComponent implements OnInit {

  applicants: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadApplicants();
  }

  loadApplicants(){

    this.adminService.getAllApplications().subscribe({

      next:(data)=>{
        this.applicants = data;
      },

      error:(err)=>{
        console.error(err);
      }

    });

  }

  changeStatus(applicationId: number, event: any){

  const newStatus = event.target.value;

  if(!newStatus) return;

  this.adminService.updateApplicationStatus(applicationId, newStatus)
  .subscribe({

    next: () => {
      alert("Status updated");
      this.loadApplicants();
    },

    error: (err) => {
      console.error(err);
    }

  });

  }


//   changeStatus(applicationId:number){

//   const newStatus = prompt("Enter new status: SHORTLISTED / REJECTED");

//   if(!newStatus) return;

//   this.adminService.updateApplicationStatus(applicationId,newStatus)
//   .subscribe(()=>{
//       alert("Status updated");
//       this.loadApplicants();
//   });

// }

}
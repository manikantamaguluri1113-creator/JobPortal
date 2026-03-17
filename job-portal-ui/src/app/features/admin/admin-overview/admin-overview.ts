// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-overview',
//   imports: [],
//   templateUrl: './admin-overview.html',
//   styleUrl: './admin-overview.css',
// })
// export class AdminOverview {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService, AdminOverviewResponse } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-overview.html',
  styleUrls: ['./admin-overview.css']
})
export class AdminOverviewComponent implements OnInit {

  overview!: AdminOverviewResponse;
  loading = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    console.log("Hii");
    this.adminService.getOverview().subscribe({
      next: (data) => {
        this.overview = data;
        this.loading = false;
        console.log("data",this.overview);
      },
      error: (err) => {
        console.error('Error loading admin overview', err);
        this.loading = false;
      }
    });
  }
}

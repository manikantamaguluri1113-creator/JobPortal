import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrService } from '../../../core/services/hr.service';

@Component({
  selector: 'app-hr-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr-applications.component.html',
  styleUrls: ['./hr-applications.component.css']
})
export class HrApplicationsComponent implements OnInit {

  applications: any[] = [];
  loading = true;

  constructor(private applicationService: HrService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.getHrApplications().subscribe({
      next: (res) => {
        this.applications = res;
        console.log("applications",this.applications);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}

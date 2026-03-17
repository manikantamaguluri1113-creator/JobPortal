import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrService } from '../../../core/services/hr.service';

@Component({
  selector: 'app-hr-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr-analytics.component.html',
  styleUrls: ['./hr-analytics.component.css']
})
export class HrAnalyticsComponent implements OnInit {

  analytics: any;
  loading = true;

  constructor(private hrService: HrService) {}

  ngOnInit(){
    this.loadHrAnalytics();
  }
  loadHrAnalytics(){
  this.hrService.getHrAnalytics().subscribe({
      next: (res) => {
        this.analytics = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Analytics error', err);
        this.loading = false;
      }
    });
    }
}

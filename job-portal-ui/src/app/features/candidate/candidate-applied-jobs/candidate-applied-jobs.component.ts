import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../../../core/services/candidate.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-candidate-applied',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './candidate-applied-jobs.component.html',
  styleUrl: './candidate-applied-jobs.component.css'
})
export class CandidateAppliedJobsComponent implements OnInit {

  applications: any[] = [];
  loading = true;

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidateApplications()
      .subscribe(res => {
        this.applications = res;
        this.loading = false;
        console.log("application", this.applications);
        console.log("loading", this.loading);
      });
  }

  withdraw(jobId: number) {

  const confirmWithdraw = confirm(
    'Are you sure you want to withdraw this application? You cannot reapply for 6 months.'
  );

  if (!confirmWithdraw) return;

  this.candidateService.withdraw(jobId).subscribe(() => {

    // this.applications = this.applications
    //   .filter(a => a.job.id !== jobId);

    alert('Application withdrawn successfully');
  });
}

}

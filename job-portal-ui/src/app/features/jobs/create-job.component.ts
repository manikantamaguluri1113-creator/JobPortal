import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../core/services/job.service';
import { Job } from '../../core/models/job.model';

@Component({
  standalone: true,
  selector: 'app-create-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {

  @Output() closed = new EventEmitter<boolean>();
  @Input() visible = false;
      job: Job = {
  "title": "",
  "description": "",
  "location": "",
  "employmentType": "FULL_TIME",
  "experienceLevel": "MID",
  "minSalary": 0,
  "maxSalary": 0
};
  // job: Job = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   location: '',
  //   employmentType: 'FULL_TIME',
  //   experienceLevel: 'MID',
  //   minSalary: 0,
  // maxSalary: 0,
  // recruiterId: 0,
  // active: true,
  // createdAt: '',
  // updatedAt: ''
  // };

  constructor(private jobService: JobService) {}

  submit() {
    this.jobService.createJob(this.job).subscribe({
      next: () => {
        alert('Job created');
        this.closed.emit(true); // refresh list
      },
      error: () => alert('Failed to create job')
    });
  }
jobCreatedSuccessfully() {
    this.closed.emit(true); // ✅ refresh jobs
  }
  cancel() {
    this.closed.emit(false);
  }
}

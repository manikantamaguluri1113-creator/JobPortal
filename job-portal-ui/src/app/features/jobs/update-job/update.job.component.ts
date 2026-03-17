import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Job } from '../../../core/models/job.model';
import { JobService } from '../../../core/services/job.service';

@Component({
  selector: 'app-update-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent {

  @Input() visible = false;
  @Input() job!: Job;

  @Output() closed = new EventEmitter<boolean>();

  constructor(private jobService: JobService) {}

  close(refresh = false) {
    this.closed.emit(refresh);
  }

  save() {
    if (!this.isFormValid()) return;

    this.jobService.updateJob(this.job.id!, this.job)
      .subscribe({
        next: () => this.close(true),
        error: () => alert('Update failed')
      });
  }

//   save() {
//   this.jobService.updateJob(this.job).subscribe({
//     next: () => {
//       this.close(true); // refresh list
//     },
//     error: () => {
//       alert('Update failed');
//     }
//   });
// }


  isFormValid(): boolean {
    return !!(
      this.job.title &&
      this.job.description &&
      this.job.location &&
      this.job.employmentType
    );
  }
}

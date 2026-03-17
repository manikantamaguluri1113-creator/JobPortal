import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Fetch all active jobs
   */
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(
      `${this.baseUrl}/jobs/getjobs`
    );
  }
  getAllActiveJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(
      `${this.baseUrl}/jobs/getactivejobs`
    );
  }
 updateJob(jobId: number, job: Job) {
  return this.http.put(`${this.baseUrl}/jobs/${jobId}`, job);
}

// updateJob(job: Job) {
//   return this.http.put<Job>(
//     `${this.baseUrl}/${job.id}`,
//     job
//   );
// }

getJobsByRecruiter() {
  return this.http.get<Job[]>(
    `${this.baseUrl}/jobs/recruiter`
  );
}



createJob(job: Job) {
  return this.http.post(`${this.baseUrl}/jobs/create`, job);
}

}

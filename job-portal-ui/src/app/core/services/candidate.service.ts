import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

    private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

//   registerCandidate(payload: {
//     fullName: string;
//     email: string;
//     password: string;
//   }): Observable<any> {
//     return this.http.post(`${this.baseUrl}/api/auth/register/candidate`, payload);
//   }

registerCandidate(payload: {
  fullName: string;
  email: string;
  password: string;
}) {
  return this.http.post(
    `${this.baseUrl}/api/auth/register/candidate`,
    payload,
    { responseType: 'text' }   // 🔥 IMPORTANT
  );
}

//  Apply Job
applyToJob(jobId: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/applications/apply/${jobId}`,
      {}
    );
  }

  // 🔹 Get applied jobs
  getCandidateApplications(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/applications/my`
    );
  }

  withdraw(jobId: number) {
  return this.http.put(
    `${this.baseUrl}/applications/withdraw/${jobId}`,
    {}
  );
}

}

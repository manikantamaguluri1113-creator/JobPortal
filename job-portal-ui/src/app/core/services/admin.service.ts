import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AdminOverviewResponse {
  totalJobs: number;
  activeJobs: number;
  inactiveJobs: number;
  totalApplications: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //private baseUrl = 'http://localhost:8080/jobs/admin';
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getOverview(): Observable<AdminOverviewResponse> {
    return this.http.get<AdminOverviewResponse>(`${this.baseUrl}/jobs/admin/overview`);
  }

  createUser(user:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/users/create`, user);
  }

  getAllUsers() {
      return this.http.get<any[]>(
        `${environment.apiBaseUrl}/api/users/admin/all`
      );
    }

    updateUser(userId:number,data:any){

    return this.http.put(
    `${environment.apiBaseUrl}/api/users/admin/${userId}`,
    data
    );

    }

    deleteUser(userId:number){

    return this.http.delete(
    `${environment.apiBaseUrl}/api/users/admin/${userId}`
    );

    }

    searchUsers(query: string) {

      return this.http.get<any[]>(
        `${environment.apiBaseUrl}/api/users/admin/search?query=${query}`
      );

  }

  deleteJob(id:number){

  return this.http.delete(
  `${environment.apiBaseUrl}/jobs/${id}`
  );

  }

    getApplicationsByJob(jobId:number){

      return this.http.get<any[]>(
      `${environment.apiBaseUrl}/jobs/job/${jobId}`
      );

      }

  getAllApplications(){
  return this.http.get<any[]>(`${environment.apiBaseUrl}/applications/allapplications`);
  }

  updateApplicationStatus(id:number,status:string){

  return this.http.put(
    `${environment.apiBaseUrl}/applications/${id}/status`,
    { status }
  );

  }
}
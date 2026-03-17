import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class HrService {

    private readonly baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}
getHrApplications(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/applications/recruiter`);
}

getHrAnalytics(): Observable<any[]> {
  return this.http.get<any>(`${this.baseUrl}/jobs/recruiter/analytics`);
}


}
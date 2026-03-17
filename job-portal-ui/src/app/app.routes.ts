import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { AdminComponent } from './features/admin/admin.component';
import { HrComponent } from './features/hr/hr.component';
import { JobComponent } from './features/jobs/job.component';
import { CandidateJobsComponent } from './features/candidate/candidate-jobs/candidate-jobs.component';
import { CandidateLoginComponent } from './features/candidate/candidate-login/candidate-login.component';
import { CandidateRegisterComponent } from './features/candidate/candidate-register/candidate-register.component';
import { CandidateAppliedJobsComponent } from './features/candidate/candidate-applied-jobs/candidate-applied-jobs.component';
import { HrJobsComponent } from './features/hr/hr-jobs/hr-jobs.component';
import { HrApplicationsComponent } from './features/hr/hr-applications/hr-applications.component';
import { HrAnalyticsComponent } from './features/hr/hr-analytics/hr-analytics.component';
import { AdminOverviewComponent } from './features/admin/admin-overview/admin-overview';
import { AdminJobsComponent } from './features/admin/admin-jobs/admin-jobs';
import { AdminUsersComponent } from './features/admin/admin-users/admin-users';
import { AdminJobApplicationsComponent } from './features/admin/admin-job-applications/admin-job-applications';
import { AdminAllApplicantsComponent } from './features/admin/admin-all-applicants/admin-all-applicants';

export const routes: Routes = [

  // LOGIN
  {
    path: 'login',
    component: LoginComponent
  },

  // DEFAULT – any logged-in user
  {
    path: '',
    component: JobComponent,
    canActivate: [authGuard]
  },

  // ADMIN ONLY
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [authGuard, roleGuard('ADMIN')]
  // },

  {
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard, roleGuard('ADMIN')],
  children: [
    { path: 'overview', component: AdminOverviewComponent },
    { path: 'jobs', component: AdminJobsComponent },
    { path: 'users', component: AdminUsersComponent},
    { path: 'all-applicants', component: AdminAllApplicantsComponent }
   // { path: 'job-applications/:jobId', component: AdminJobApplicationsComponent }
    // { path: 'analytics', component: AdminAnalyticsComponent }
  ]
},

  // HR ONLY
  {
  path: 'hr',
  component: HrComponent,
  canActivate: [authGuard, roleGuard('HR')],
  data: { roles: ['HR'] },
  children: [
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    { path: 'jobs', component: HrJobsComponent },
    { path: 'applications', component: HrApplicationsComponent },
    { path: 'analytics', component: HrAnalyticsComponent }
  ]
},

  // {
  //   path: 'hr',
  //   component: HrComponent,
  //   canActivate: [authGuard, roleGuard('HR')]
  // },

  // JOBS – all logged-in users
  {
    path: 'jobs',
    component: JobComponent,
    canActivate: [authGuard]
  },

  // CANDIDATE — VIEW JOBS ONLY
  {
    path: 'candidate/jobs',
    component: CandidateJobsComponent,
    canActivate: [authGuard, roleGuard('CANDIDATE')]
  },

{
  path: 'candidate/applied',
  component: CandidateAppliedJobsComponent,
  canActivate: [authGuard, roleGuard('CANDIDATE')]
},

  {
  path: 'candidate/login',
  component: CandidateLoginComponent,
},
{
  path: 'candidate/register',
  component: CandidateRegisterComponent,
},

{
  path: 'admin/jobs/applications/:jobId',
  component: AdminJobApplicationsComponent
},

  // FALLBACK
  {
    path: '**',
    redirectTo: ''
  }
];

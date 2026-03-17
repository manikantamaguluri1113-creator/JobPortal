import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobApplications } from './admin-job-applications';

describe('AdminJobApplications', () => {
  let component: AdminJobApplications;
  let fixture: ComponentFixture<AdminJobApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminJobApplications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobApplications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllApplicants } from './admin-all-applicants';

describe('AdminAllApplicants', () => {
  let component: AdminAllApplicants;
  let fixture: ComponentFixture<AdminAllApplicants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAllApplicants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllApplicants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

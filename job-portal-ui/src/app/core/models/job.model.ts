export interface Job {
 // system-generated (optional for create)
  id?: number;
  recruiterId?: number;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;

  // required for create
  title: string;
  description: string;
  location: string;

  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
  experienceLevel?: 'FRESHER' | 'MID' | 'SENIOR';

  minSalary?: number;
  maxSalary?: number;
}

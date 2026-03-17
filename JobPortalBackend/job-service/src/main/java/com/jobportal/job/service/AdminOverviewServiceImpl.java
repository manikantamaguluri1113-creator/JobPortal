package com.jobportal.job.service;

import org.springframework.stereotype.Service;

import com.jobportal.job.dto.AdminOverviewResponse;
import com.jobportal.job.repository.JobApplicationRepository;
import com.jobportal.job.repository.JobRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminOverviewServiceImpl implements AdminOverviewService {

    private final JobRepository jobRepository;
    private final JobApplicationRepository jobApplicationRepository;
    
    public AdminOverviewServiceImpl(
            JobApplicationRepository jobApplicationRepository,
            JobRepository jobRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public AdminOverviewResponse getOverview() {

        long totalJobs = jobRepository.count();
        long activeJobs = jobRepository.countByActiveTrue();
        long inactiveJobs = jobRepository.countByActiveFalse();
        long totalApplications = jobApplicationRepository.count();

        return new AdminOverviewResponse(
                totalJobs,
                activeJobs,
                inactiveJobs,
                totalApplications
        );
    }
}

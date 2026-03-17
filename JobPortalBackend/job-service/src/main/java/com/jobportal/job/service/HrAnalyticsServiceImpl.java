package com.jobportal.job.service;

import com.jobportal.job.dto.HrAnalyticsResponse;
import com.jobportal.job.repository.JobApplicationRepository;
import com.jobportal.job.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HrAnalyticsServiceImpl implements HrAnalyticsService {

    private final JobRepository jobRepository;
    private final JobApplicationRepository jobApplicationRepository;
    
    public HrAnalyticsServiceImpl(
            JobApplicationRepository jobApplicationRepository,
            JobRepository jobRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public HrAnalyticsResponse getHrAnalytics(Long recruiterId) {

        long totalJobs = jobRepository.countByRecruiterId(recruiterId);
        long activeJobs = jobRepository.countByRecruiterIdAndActiveTrue(recruiterId);
        long inactiveJobs = jobRepository.countByRecruiterIdAndActiveFalse(recruiterId);

        long totalApplications =
                jobApplicationRepository.countByJobRecruiterId(recruiterId);

        long appliedCount =
                jobApplicationRepository.countByJobRecruiterIdAndStatus(
                        recruiterId, "APPLIED"
                );

        long withdrawnCount =
                jobApplicationRepository.countByJobRecruiterIdAndStatus(
                        recruiterId, "WITHDRAWN"
                );

        return new HrAnalyticsResponse(
                totalJobs,
                activeJobs,
                inactiveJobs,
                totalApplications,
                appliedCount,
                withdrawnCount
        );
    }
}

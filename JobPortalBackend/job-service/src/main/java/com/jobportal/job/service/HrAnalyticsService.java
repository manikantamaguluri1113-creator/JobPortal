package com.jobportal.job.service;

import com.jobportal.job.dto.HrAnalyticsResponse;

public interface HrAnalyticsService {

    HrAnalyticsResponse getHrAnalytics(Long recruiterId);
}

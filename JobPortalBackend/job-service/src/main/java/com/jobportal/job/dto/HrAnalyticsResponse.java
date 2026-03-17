package com.jobportal.job.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor

public class HrAnalyticsResponse {

    // ---------------------------
    // Job Metrics
    // ---------------------------
    private long totalJobs;
    private long activeJobs;
    private long inactiveJobs;

    // ---------------------------
    // Application Metrics
    // ---------------------------
    private long totalApplications;
    private long appliedCount;
    private long withdrawnCount;
    
    public HrAnalyticsResponse(
            long totalJobs,
            long activeJobs,
            long inactiveJobs,
            long totalApplications,
            long appliedCount,
            long withdrawnCount
    ) {
        this.totalJobs = totalJobs;
        this.activeJobs = activeJobs;
        this.inactiveJobs = inactiveJobs;
        this.totalApplications = totalApplications;
        this.appliedCount = appliedCount;
        this.withdrawnCount = withdrawnCount;
    }

	public long getTotalJobs() {
		return totalJobs;
	}

	public void setTotalJobs(long totalJobs) {
		this.totalJobs = totalJobs;
	}

	public long getActiveJobs() {
		return activeJobs;
	}

	public void setActiveJobs(long activeJobs) {
		this.activeJobs = activeJobs;
	}

	public long getInactiveJobs() {
		return inactiveJobs;
	}

	public void setInactiveJobs(long inactiveJobs) {
		this.inactiveJobs = inactiveJobs;
	}

	public long getTotalApplications() {
		return totalApplications;
	}

	public void setTotalApplications(long totalApplications) {
		this.totalApplications = totalApplications;
	}

	public long getAppliedCount() {
		return appliedCount;
	}

	public void setAppliedCount(long appliedCount) {
		this.appliedCount = appliedCount;
	}

	public long getWithdrawnCount() {
		return withdrawnCount;
	}

	public void setWithdrawnCount(long withdrawnCount) {
		this.withdrawnCount = withdrawnCount;
	}
    
    
    
}

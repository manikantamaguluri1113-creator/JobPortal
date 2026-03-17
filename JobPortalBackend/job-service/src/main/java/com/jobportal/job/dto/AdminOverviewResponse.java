package com.jobportal.job.dto;

public class AdminOverviewResponse {

    private long totalJobs;
    private long activeJobs;
    private long inactiveJobs;
    private long totalApplications;

    public AdminOverviewResponse(long totalJobs, long activeJobs,
                                 long inactiveJobs, long totalApplications) {
        this.totalJobs = totalJobs;
        this.activeJobs = activeJobs;
        this.inactiveJobs = inactiveJobs;
        this.totalApplications = totalApplications;
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

    
}

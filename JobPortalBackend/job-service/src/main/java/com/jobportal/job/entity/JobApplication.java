package com.jobportal.job.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

import org.apache.catalina.User;

@Entity
@Table(name = "job_applications",
       uniqueConstraints = @UniqueConstraint(columnNames = {"job_id", "candidate_id"}))

@Getter
@Setter
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Which job
//    @Column(name = "job_id", nullable = false)
//    private Long jobId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;
    
    // Which candidate
    @Column(name = "candidate_id", nullable = false)
    private Long candidateId;

   
    @Column(name = "candidate_email")
    private String candidateEmail;
    
    public String getCandidateEmail() {
		return candidateEmail;
	}

	public void setCandidateEmail(String candidateEmail) {
		this.candidateEmail = candidateEmail;
	}

	@Column(nullable = false)
    private LocalDateTime appliedAt;
    
    @Column(nullable = false)
    private String status;

    @PrePersist
    protected void onApply() {
        this.appliedAt = LocalDateTime.now();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public Long getJobId() {
//		return jobId;
//	}
//
//	public void setJobId(Long jobId) {
//		this.jobId = jobId;
//	}

	
	public LocalDateTime getAppliedAt() {
		return appliedAt;
	}

	

	public Long getCandidateId() {
		return candidateId;
	}

	public void setCandidateId(Long candidateId) {
		this.candidateId = candidateId;
	}

	public void setAppliedAt(LocalDateTime appliedAt) {
		this.appliedAt = appliedAt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}
    
    
}

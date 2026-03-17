package com.jobportal.job.controller;

import com.jobportal.job.entity.JobApplication;
import com.jobportal.job.repository.JobRepository;
import com.jobportal.job.security.JwtUtil;
import com.jobportal.job.service.JobApplicationService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/applications")
@RequiredArgsConstructor
public class JobApplicationController {
	private final JwtUtil jwtUtil;

    private final JobApplicationService jobApplicationService;
    
    public JobApplicationController(JobApplicationService jobApplicationService, JwtUtil jwtUtil) {
    	
        this.jobApplicationService = jobApplicationService;
        this.jwtUtil = jwtUtil;
    }

    // ------------------------------------------------
    // 1️⃣ Candidate Apply to Job
    // ------------------------------------------------
//    @PostMapping("/apply/{jobId}")
//    public ResponseEntity<JobApplication> apply(
//            @PathVariable Long jobId,
//            Authentication authentication
//    ) {
//        Long candidateId = (Long) authentication.getPrincipal();
//        System.out.println(authentication.getPrincipal().getClass());
//        System.out.println(authentication.getPrincipal());
//
//        JobApplication application =
//                jobApplicationService.applyToJob(candidateId, jobId);
//
//        return ResponseEntity.ok(application);
//    }
    
    @PostMapping("/apply/{jobId}")
    public ResponseEntity<JobApplication> apply(
            @PathVariable Long jobId,
            Authentication authentication,
            HttpServletRequest request
    ) {
//        Long candidateId = Long.parseLong(authentication.getName());
//        System.out.println("jobId =" + jobId);
    	
    	// Extract token from header
        String authHeader = request.getHeader("Authorization");
        String token = authHeader.substring(7);

        // Extract values from JWT
        Long candidateId = jwtUtil.extractUserId(token);
        String email = jwtUtil.extractEmail(token);

        System.out.println("CandidateId = " + candidateId);
        System.out.println("Email = " + email);
        System.out.println("JobId = " + jobId);
        JobApplication application =
                jobApplicationService.applyToJob(jobId, candidateId, email);

        return ResponseEntity.ok(application);
    }

    @PutMapping("/withdraw/{jobId}")
    public ResponseEntity<JobApplication> withdraw(
            @PathVariable Long jobId,
            Authentication authentication
    ) {

        Long candidateId = Long.parseLong(authentication.getPrincipal().toString());

        JobApplication updated =
                jobApplicationService.withdraw(candidateId, jobId);

        return ResponseEntity.ok(updated);
    }

    // ------------------------------------------------
    // 2️⃣ Get Applied Jobs of Candidate
    // ------------------------------------------------
    @GetMapping("/my")
    public ResponseEntity<List<JobApplication>> getMyApplications(
            Authentication authentication
    ) {
        Long candidateId = Long.valueOf(authentication.getPrincipal().toString());
        //System.out.println("canId = " + candidateId);
        List<JobApplication> applications =
                jobApplicationService.getApplicationsByCandidate(candidateId);

        return ResponseEntity.ok(applications);
    }
    
    //Get Applications For Recruiter
    @GetMapping("/recruiter")
    public ResponseEntity<List<JobApplication>> getApplicationsForRecruiter(
            Authentication authentication
    ) {
        Long recruiterId =
                Long.parseLong(authentication.getPrincipal().toString());
        
        System.out.println("recId" + recruiterId);
        return ResponseEntity.ok(
                jobApplicationService.getApplicationsForRecruiter(recruiterId)
        );
    }
    
    @GetMapping("/allapplications")
    public ResponseEntity<List<JobApplication>> getAllApplications() {

        List<JobApplication> applications = jobApplicationService.getAllApplications();

        return ResponseEntity.ok(applications);
    }
    
    
    @PutMapping("/{id}/status")
    public ResponseEntity<JobApplication> updateApplicationStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request
    ) {

        String status = request.get("status");

        JobApplication updated = jobApplicationService.updateStatus(id, status);

        return ResponseEntity.ok(updated);
    }
}

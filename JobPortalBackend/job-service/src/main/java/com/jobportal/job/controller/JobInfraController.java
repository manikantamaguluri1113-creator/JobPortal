package com.jobportal.job.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/jobs")
public class JobInfraController {

    @GetMapping("/health")
    public String health() {
        return "Job Service is UP";
    }
    
    private final RestTemplate restTemplate;

    public JobInfraController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/user-service-status")
    public String getUserServiceStatus() {
        return restTemplate.getForObject(
                "http://USER-SERVICE/users/health",
                String.class
        );
    }
}

package com.jobportal.user.auth;

import com.jobportal.user.dto.CandidateRegisterRequest;
import com.jobportal.user.entity.User;
import com.jobportal.user.security.JwtUtil;
import com.jobportal.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserService userService;

    public AuthController(
            AuthenticationManager authenticationManager,
            JwtUtil jwtUtil,
            UserService userService
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userService.findByEmail(request.getEmail());

        String token = jwtUtil.generateToken(
        		 user.getId(),
        		user.getEmail(),
                user.getRole().name()
               
        );

        return ResponseEntity.ok(
                new AuthResponse(token, "Bearer")
        );
    }
    
    @PostMapping("/register/candidate")
    public ResponseEntity<String> registerCandidate(
            @RequestBody CandidateRegisterRequest request
    ) {
        userService.registerCandidate(
            request.getFullName(),
            request.getEmail(),
            request.getPassword()
        );

        return ResponseEntity.ok("Candidate registered successfully");
    }

}

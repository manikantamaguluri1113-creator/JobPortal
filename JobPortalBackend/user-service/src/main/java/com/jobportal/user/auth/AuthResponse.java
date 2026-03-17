package com.jobportal.user.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponse {

    private String token;
    private String tokenType;
    
    public AuthResponse(String token, String tokenType) {
        this.token = token;
        this.tokenType = tokenType;
    }
    
    public String getToken() {
        return token;
    }

    public String getTokenType() {
        return tokenType;
    }
}

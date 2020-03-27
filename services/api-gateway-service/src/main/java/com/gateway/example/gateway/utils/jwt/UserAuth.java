package com.gateway.example.gateway.utils.jwt;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static java.util.Objects.isNull;

@AllArgsConstructor
@Component
@Slf4j
public class UserAuth {

    private final TokenVerifier tokenVerifier;

    // TODO use the Spring security!!
    public boolean checkUserAuth(String jwtSecret, HttpServletRequest request) {
        if (request.getRequestURI().contains("/api/authenticate")) {
            // No pre-authentication needed
            return true;
        }

        // All other endpoints need the user authentication
        String authHeader = request.getHeader("authorization");
        if (isNull(authHeader)) {
            // Token not present
            return false;
        }
        String token = authHeader.replace("Bearer ", "");
        return tokenVerifier.verifyToken(token);
    }


}

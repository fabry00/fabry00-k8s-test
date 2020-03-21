package com.gateway.example.gateway.utils;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static java.util.Objects.isNull;

@Component
@AllArgsConstructor
@Slf4j
public class UserAuth {

    private final JwtTokenUtil tokenUtil;

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
        log.info("User from JWT: " + tokenUtil.getUsernameFromToken(token));
        log.info("Expiration JWT: " + tokenUtil.getExpirationDateFromToken(token));

        boolean isTokenValid = tokenUtil.validateToken(token);
        log.info("JWT valid: " + isTokenValid);
        return isTokenValid;
    }
}

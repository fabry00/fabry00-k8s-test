package com.gateway.example.gateway.utils.jwt;

import com.gateway.example.config.AppProperties;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.fluent.Request;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Slf4j
@Service
public class TokenVerifier {
    private final String authService;

    public TokenVerifier(AppProperties properties) {
        authService = properties.getEndpoints().stream()
                .filter(e -> e.getPath().contains("api/authenticate"))
                .map(AppProperties.Endpoint::getLocation)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("authenticate path not found"));
    }

    @Cacheable("tokenValidCache")
    public boolean verifyToken(String token) {
        boolean authorized = false;
        try {
            final String url = authService + "/api/verify/" + token;
            log.info("Calling: " + url);
            HttpResponse response = Request.Get(url)
                    .execute()
                    .returnResponse();
            log.info("User authorized code: " + response.getStatusLine().getStatusCode());
            authorized = response.getStatusLine().getStatusCode() == HttpStatus.SC_OK;
        } catch (IOException e) {
            e.printStackTrace();
        }

        log.info("User authorized: " + authorized);
        return authorized;
    }
}

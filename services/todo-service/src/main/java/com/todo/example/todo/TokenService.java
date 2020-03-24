package com.todo.example.todo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.todo.example.config.AppProperties;
import com.todo.example.user.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.fluent.Request;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Slf4j
@Service
public class TokenService {
    private final AppProperties properties;
    private final ObjectMapper mapper = new ObjectMapper();

    public TokenService(AppProperties properties) {
        this.properties = properties;
    }

    @Cacheable("getUserFromToken")
    public Optional<User> getUserFromToken(String token) {
        try {
            final String url = properties.getAuthEndpoint() + token;
            log.info("Calling: " + url);
            String json = Request.Get(url)
                    .execute()
                    .returnContent().asString();
            if (json.isEmpty()) {
                return Optional.empty();
            }
            return Optional.of(mapper.readValue(json, User.class));
        } catch (IOException e) {
            e.printStackTrace();
            log.error(e.getMessage());
        }

        return Optional.empty();
    }
}

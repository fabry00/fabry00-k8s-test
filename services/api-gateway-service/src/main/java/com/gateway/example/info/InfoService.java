package com.gateway.example.info;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gateway.example.config.ApiGatewayProperties;
import com.google.common.collect.ImmutableSet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.fluent.Request;
import org.springframework.boot.actuate.health.Status;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class InfoService {

    private ApiGatewayProperties properties;

    Set<Info.ServiceHealth> getHealth() {
        return ImmutableSet.copyOf(properties
                .getServicesList()
                .entrySet()
                .parallelStream()
                .map(this::fetchServiceHealth)
                .collect(Collectors.toSet()));

    }

    private Info.ServiceHealth fetchServiceHealth(Map.Entry<String, String> service) {
        final String url = String.format("%s/actuator/health", service.getValue());
        log.info("Querying: {} at {}", url, service.getKey());
        try {
            String response = Request.Get(url)
                    .execute()
                    .returnContent().asString();
            return new Info.ServiceHealth(service.getKey(), responseToHealth(response));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new Info.ServiceHealth(service.getKey(), Status.DOWN.toString());
    }

    private String responseToHealth(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            HealthResponse health = mapper.readValue(response, HealthResponse.class);
            if (health.status.equals(Status.UP.toString())) {
                return Status.UP.toString();
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return Status.DOWN.toString();

    }

    @Data
    @NoArgsConstructor
    private static class HealthResponse {
        private String status;
    }
}
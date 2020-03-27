package com.gateway.example.info;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gateway.example.config.AppProperties;
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

    private AppProperties properties;

    Set<Info.ServiceHealth> getHealth() {
        return ImmutableSet.copyOf(properties
                .getServicesList()
                .entrySet()
                .parallelStream()
                .map(this::fetchServiceHealth)
                .collect(Collectors.toSet()));

    }

    private Info.ServiceHealth fetchServiceHealth(Map.Entry<String, String> service) {
        final String url = String.format("%s/info", service.getValue());
        log.info("Querying: {} at {}", url, service.getKey());
        try {
            String response = Request.Get(url)
                    .execute()
                    .returnContent().asString();
            Info.ServiceHealth info = responseToHealth(response);
            info.setName(service.getKey());
            info.setStatus(Status.UP.toString());
            return info;
        } catch (IOException e) {
            e.printStackTrace();
        }

        Info.ServiceHealth info = new Info.ServiceHealth();
        info.setName(service.getKey());
        info.setStatus(Status.DOWN.toString());
        return info;
    }

    private Info.ServiceHealth responseToHealth(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(response, Info.ServiceHealth.class);

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        throw new RuntimeException("Error getting info");

    }

    @Data
    @NoArgsConstructor
    private static class HealthResponse {
        private String version;
        private String environment;
        private String podId;
        private String podNamespace;
        private String podIp;
    }
}
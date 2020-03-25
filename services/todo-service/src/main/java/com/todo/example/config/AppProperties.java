package com.todo.example.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.validation.constraints.NotNull;

@Configuration
@ConfigurationProperties(prefix = "app")
@Primary
@Data
public class AppProperties {

    @NotNull
    private String environment;

    @NotNull
    private String podId;

    @NotNull
    private String podNamespace;

    @NotNull
    private String podIp;

    @NotNull
    private Cache cache;

    @NotNull
    private String authEndpoint;

    @ToString
    @Data
    public static class Cache {
        private int maxValues;
        private int ttlMinutes;
    }

    @NotNull
    private String redisMasterHost;

    @NotNull
    private int redisMasterPort;
}

package com.gateway.example.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.constraints.NotNull;
import java.util.List;

@Configuration
@Primary
@Data
@ConfigurationProperties(prefix = "api.gateway")
public class ApiGatewayProperties {

    @NotNull
    private String environment;

    @NotNull
    private String podId;

    @NotNull
    private String podNamespace;

    @NotNull
    private String podIp;

    @NotNull
    private Services services;

    @NotNull
    private String jwtSecret;

    @NotNull
    private List<Endpoint> endpoints;

    @ToString
    @Data
    public static class Endpoint {
        private String path;
        private RequestMethod method;
        private String location;
    }

    @Data
    public static class Services {
        private final String todo;
        private final String user;
    }


}

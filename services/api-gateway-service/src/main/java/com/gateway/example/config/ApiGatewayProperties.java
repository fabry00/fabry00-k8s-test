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

    private List<Endpoint> endpoints;

    @ToString
    public static class Endpoint {
        private String path;
        private RequestMethod method;
        private String location;

        public Endpoint() {
        }

        public Endpoint(String location) {
            this.location = location;
        }

        public String getPath() {
            return path;
        }

        public void setPath(String path) {
            this.path = path;
        }

        public RequestMethod getMethod() {
            return method;
        }

        public void setMethod(RequestMethod method) {
            this.method = method;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }
    }

    public List<Endpoint> getEndpoints() {
        return endpoints;
    }

    public void setEndpoints(List<Endpoint> endpoints) {
        this.endpoints = endpoints;
    }
}

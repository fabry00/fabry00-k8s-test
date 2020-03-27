package com.gateway.example.info;

import com.gateway.example.config.AppProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@Data
@EqualsAndHashCode
class Info {

    private final String version;
    private final String environment;
    private final String podId;
    private final String podNamespace;
    private final String podIp;
    private Set<ServiceHealth> health;

    Info(AppProperties properties) {
        this.version = properties.getVersion();
        this.environment = properties.getEnvironment();
        this.podId = properties.getPodId();
        this.podNamespace = properties.getPodNamespace();
        this.podIp = properties.getPodIp();
    }

    void setHealth(Set<ServiceHealth> health) {
        this.health = health;
    }


    @Data
    @ToString
    public static class ServiceHealth {
        private String name;
        private String status;
        private String version;
        private String environment;
        private String podId;
        private String podNamespace;
        private String podIp;
    }

}

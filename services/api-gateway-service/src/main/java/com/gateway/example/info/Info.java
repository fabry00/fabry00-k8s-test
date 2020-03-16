package com.gateway.example.info;

import com.gateway.example.config.ApiGatewayProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.stereotype.Component;

@Component
@Data
@EqualsAndHashCode
class Info {

    private final String environment;
    private final String podId;
    private final String podNamespace;
    private final String podIp;

    Info(ApiGatewayProperties properties) {
        this.environment = properties.getEnvironment();
        this.podId = properties.getPodId();
        this.podNamespace = properties.getPodNamespace();
        this.podIp = properties.getPodIp();
    }

}
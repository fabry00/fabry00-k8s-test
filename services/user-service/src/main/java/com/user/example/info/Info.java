package com.user.example.info;

import com.user.example.config.AppProperties;
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

    Info(AppProperties properties) {
        this.environment = properties.getEnvironment();
        this.podId = properties.getPodId();
        this.podNamespace = properties.getPodNamespace();
        this.podIp = properties.getPodIp();
    }

}
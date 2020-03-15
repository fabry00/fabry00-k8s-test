package com.example.info;

import com.example.config.AppProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.stereotype.Component;

@Component
@Data
@EqualsAndHashCode
class Info {

    private final String environment;

    Info(AppProperties properties) {
        this.environment = properties.getEnvironment();
    }

}
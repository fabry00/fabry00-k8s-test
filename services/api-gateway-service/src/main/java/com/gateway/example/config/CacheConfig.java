package com.gateway.example.config;

import com.google.common.cache.CacheBuilder;
import lombok.AllArgsConstructor;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@EnableCaching
@Configuration
@AllArgsConstructor
public class CacheConfig {

    private final ApiGatewayProperties properties;

    @Bean
    public CacheManager cacheManager() {
        ConcurrentMapCacheManager cacheManager = new ConcurrentMapCacheManager() {

            @Override
            protected Cache createConcurrentMapCache(final String name) {
                return new ConcurrentMapCache(name,
                        CacheBuilder.newBuilder()
                                .expireAfterWrite(properties.getCache().getTtlMinutes(), TimeUnit.MINUTES)
                                .maximumSize(properties.getCache().getMaxValues())
                                .build().
                                asMap(), false);
            }
        };

        return cacheManager;
    }
}
package com.gateway.example.config;

import io.lettuce.core.ReadFrom;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;


@Configuration
@EnableCaching
@EnableRedisRepositories
public class RedisConfig {

    @Bean
    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory, ApiGatewayProperties properties) {

        //  Default cache configuration
        final RedisCacheConfiguration defaultCacheConfigs = createCacheConfiguration(properties
                .getCache()
                .getDefaultTtlMinutes());

        // Specific cache configuration  cache configuration
        final Map<String, RedisCacheConfiguration> cacheConfigurations = new HashMap<>();
        for (Map.Entry<String, Integer> cacheNameAndTimeout : properties.getCache().getCacheExpirations().entrySet()) {
            cacheConfigurations.put(cacheNameAndTimeout.getKey(), createCacheConfiguration(cacheNameAndTimeout.getValue()));
        }

        return RedisCacheManager
                .builder(redisConnectionFactory)
                .cacheDefaults(defaultCacheConfigs)
                .withInitialCacheConfigurations(cacheConfigurations).build();

    }

    @Bean
    public LettuceConnectionFactory redisConnectionFactory(ApiGatewayProperties properties) {
        LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
                .readFrom(ReadFrom.REPLICA_PREFERRED)
                .build();

        RedisStandaloneConfiguration serverConfig = new RedisStandaloneConfiguration(properties.getRedisMasterHost(), properties.getRedisMasterPort());

        return new LettuceConnectionFactory(serverConfig, clientConfig);
    }

    private static RedisCacheConfiguration createCacheConfiguration(long timeoutInMinutes) {
        return RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofSeconds(timeoutInMinutes));
    }

}
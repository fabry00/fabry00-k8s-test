package com.todo.example.config;

import io.lettuce.core.ReadFrom;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@Configuration
@AllArgsConstructor
@EnableRedisRepositories
public class RedisConfig {
    private AppProperties properties;

    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
//        return new LettuceConnectionFactory(new RedisStandaloneConfiguration(properties.getRedisMasterHost(), properties.getRedisMasterPort()));
        LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
                .readFrom(ReadFrom.REPLICA_PREFERRED)
                .build();

        RedisStandaloneConfiguration serverConfig = new RedisStandaloneConfiguration(properties.getRedisMasterHost(), properties.getRedisMasterPort());

        return new LettuceConnectionFactory(serverConfig, clientConfig);
    }

}
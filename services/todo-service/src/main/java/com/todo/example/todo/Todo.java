package com.todo.example.todo;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@RedisHash("Todo")
class Todo implements Serializable {

    private static final long serialVersionUID = 5630345854047958835L;
    @Id
    @Indexed
    @EqualsAndHashCode.Include
    private String id;
    @Indexed
    private final long userId;
    private final String title;
    private final String content;
    private final long created;
    private final long expiration;

    public Todo(long userId, String title, String content, long created, long expiration) {
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.created = created;
        this.expiration = expiration;
    }
}
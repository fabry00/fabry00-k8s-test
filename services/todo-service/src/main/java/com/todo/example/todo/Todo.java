package com.todo.example.todo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(exclude = {"content"})
class Todo {

    private final long id;
    private final long userId;
    private final String title;
    private final String content;
    private final long created;
    private final long expiration;

}
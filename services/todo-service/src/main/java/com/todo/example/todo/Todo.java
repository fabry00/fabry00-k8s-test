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

    Todo(long id, long userId, String title, String content) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.content = content;
    }

}
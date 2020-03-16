package com.todo.example.todo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
class Todo {

    private final long id;
    private final String content;

    Todo(long id, String content) {
        this.id = id;
        this.content = content;
    }

}
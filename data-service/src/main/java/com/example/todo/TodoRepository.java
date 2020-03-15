package com.example.todo;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Repository
public class TodoRepository {

    private final Map<Long,Todo> todos = new HashMap<>();

    TodoRepository() {
        todos.put(1L, new Todo(1, "Todo 1"));
        todos.put(2L,new Todo(2, "Todo 2"));
        todos.put(3L,new Todo(3, "Todo 3"));
        todos.put(4L,new Todo(4, "Todo 4"));
        todos.put(5L,new Todo(5, "Todo 5"));
    }

    Todo get(long id) {
        return todos.get(id);
    }
}

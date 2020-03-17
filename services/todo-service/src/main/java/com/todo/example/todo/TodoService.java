package com.todo.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@AllArgsConstructor
public class TodoService {

    private final TodoRepository repo;

    public Todo getTodo(long id) {
        return repo.get(id);
    }

    public Set<Todo> getAllUserTodos(long userId) {
        return repo.getAll(userId);
    }
}

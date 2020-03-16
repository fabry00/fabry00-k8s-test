package com.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoService {

    private final TodoRepository repo;

    public Todo getTodo(long id) {
        return repo.get(id);
    }
}

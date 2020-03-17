package com.todo.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@AllArgsConstructor
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/{id}")
    public Todo todo(@PathVariable long id) {
        return todoService.getTodo(id);
    }

    @GetMapping("/user/{id}")
    public Set<Todo> userTodos(@PathVariable long id) {
        return todoService.getAllUserTodos(id);
    }
}
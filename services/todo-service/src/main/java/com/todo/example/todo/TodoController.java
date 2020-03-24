package com.todo.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody Todo todo, @RequestHeader("Authorization") String authorization) {
        return todoService.create(todo, authorization) ? ResponseEntity.ok("") : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
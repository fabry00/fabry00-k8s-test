package com.todo.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/{id}")
    public Optional<Todo> todo(@PathVariable String id) {
        return todoService.getTodo(id);
    }

    @GetMapping("")
    public List<Todo> userTodos(@RequestHeader("Authorization") String authorization) {
        return todoService.getAllUserTodos(authorization);
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteTodos(@RequestHeader("Authorization") String authorization) {
        todoService.deleteTodos(authorization);
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodos(@PathVariable String id, @RequestHeader("Authorization") String authorization) {
        todoService.deleteTodo(id, authorization);
        return ResponseEntity.ok("");
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody Todo todo, @RequestHeader("Authorization") String authorization) {
        return todoService.create(todo, authorization) ? ResponseEntity.ok("") : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody Todo todo, @RequestHeader("Authorization") String authorization) {
        return todoService.update(todo, authorization) ? ResponseEntity.ok("") : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
package com.example.todo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class TodoController {

	private final TodoService todoService;

	@GetMapping("/todo")
	public Todo todo(@RequestParam(value = "id") long id) {
		return todoService.getTodo(id);
	}
}
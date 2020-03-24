package com.todo.example.todo;

import com.todo.example.user.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
@AllArgsConstructor
public class TodoService {

    private final TodoRepository repo;
    private final TokenService tokenService;

    public Todo getTodo(long id) {
        return repo.get(id);
    }

    public Set<Todo> getAllUserTodos(long userId) {
        return repo.getAll(userId);
    }

    public boolean create(Todo todo, String authorizationHeader) {
        String token = authorizationHeader.replace("Bearer ", "");
        Optional<User> userOptional = tokenService.getUserFromToken(token);
        userOptional.ifPresent(user -> repo.add(user, todo));
        return userOptional.isPresent();
    }
}

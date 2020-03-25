package com.todo.example.todo;

import com.google.common.collect.ImmutableList;
import com.todo.example.user.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class TodoService {

    private final TodoRepository repo;
    private final TokenService tokenService;

    public Optional<Todo> getTodo(String id) {
        return repo.findById(id);
    }

    public List<Todo> getAllUserTodos(String authorization) {
        Optional<User> userOptional = getUserFromToken(authorization);

        return userOptional
                .map(user -> {
                    log.info("Get all user's Todos {}", user.getId());
                    List<Todo> todos = repo.findByUserId(user.getId());
                    log.info("user's Todos {}", todos.size());
                    return todos;
                })
                // TODO we should return unauthorized
                .orElse(ImmutableList.of());
    }

    public void deleteTodos(String authorization) {
        final Optional<User> userOptional = getUserFromToken(authorization);

        userOptional.ifPresent(u -> {
            log.info("Delete all user's Todos {}", u.getId());
            List<Todo> todos = repo.findByUserId(u.getId());
            log.info("Deleting  {}", todos.size());
            repo.deleteAll(todos);
        });
    }

    @Transactional
    public void deleteTodo(String id, String authorization) {
        final Optional<User> userOptional = getUserFromToken(authorization);

        userOptional.ifPresent(u -> {
            log.info("Delete  Todo  {} for user {}", id, u.getId());
            Optional<Todo> todo = repo.findById(id);
            List<Todo> todos = repo.findByUserId(u.getId());
            repo.deleteById(id);
            Optional<Todo> todo2 = repo.findById(id);
            log.info("s");
        });
    }

    public boolean create(Todo todo, String authorizationHeader) {
        Optional<User> userOptional = getUserFromToken(authorizationHeader);
        userOptional.ifPresent(user -> {
            Todo newTodo = new Todo(user.getId(),
                    todo.getTitle(),
                    todo.getContent(),
                    todo.getCreated(),
                    todo.getExpiration());

            repo.save(newTodo);
            log.info("NEW TODO: " + repo.findById(newTodo.getId()));
            printAll();
        });
        return userOptional.isPresent();
    }

    public boolean update(Todo todo, String authorizationHeader) {
        Optional<User> userOptional = getUserFromToken(authorizationHeader);
        if (!userOptional.isPresent()) {
            log.info("user not found");
            return false;
        }
        User user = userOptional.orElse(new User());

        if (user.getId() != todo.getUserId()) {
            log.info("not allowed");
            return false;
        }
        repo.save(todo);
        log.info("TODO Saved: " + repo.findById(todo.getId()));
        printAll();

        return userOptional.isPresent();
    }

    private Optional<User> getUserFromToken(String authorizationHeader) {
        String token = authorizationHeader.replace("Bearer ", "");
        return tokenService.getUserFromToken(token);
    }

    private void printAll() {
        // for debug
        repo.findAll().forEach(t -> log.info(t.toString()));
    }

}

package com.todo.example.todo;

import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
public class TodoRepository {

    // Should be immutable
    private final Set<Todo> todos = new HashSet<>();

    TodoRepository() {
        todos.add(new Todo(1, 1, "Todo 1", getRandomContent()));
        todos.add(new Todo(2, 1, "Todo 2", getRandomContent()));
        todos.add(new Todo(3, 1, "Todo 3", getRandomContent()));
        todos.add(new Todo(4, 2, "Todo 4", getRandomContent()));
        todos.add(new Todo(5, 3, "Todo 5", getRandomContent()));
    }

    Todo get(long id) {
        return todos
                .stream()
                .filter(todo -> todo.getId() == id)
                .findFirst()
                .orElse(null); // bleah!!!! Don't cate its a demo
    }

    Set<Todo> getAll(long userId) {
        return todos
                .stream()
                .filter(todo -> todo.getUserId() == userId)
                .collect(Collectors.toSet());
    }

    private static String getRandomContent() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}

package com.user.example.user;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class UserRepository {

    private final Map<String, User> users = new HashMap<>();

    UserRepository() {
        users.put("1", new User("1", "user1", "pass1"));
        users.put("2", new User("2", "user2", "pass2"));
    }

    Optional<User> get(String id) {
        return users.containsKey(id) ? Optional.of(users.get(id)) : Optional.empty();
    }

    public Optional<User> get(String username, String password) {
        return users.values()
                .stream()
                .filter(u -> u.getUsername().equals(username))
                .filter(u -> u.getPassword().equals(password))
                .findAny();
    }
}

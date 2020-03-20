package com.user.example.user;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class UserRepository {

    private final Map<Long, User> users = new HashMap<>();

    UserRepository() {
        users.put(1L, new User(1, "user1", "pass1"));
        users.put(2L, new User(2, "user2", "pass2"));
        users.put(3L, new User(3, "user3", "pass3"));
        users.put(4L, new User(4, "user4", "pass4"));
        users.put(5L, new User(5, "user5", "pass5"));
    }

    User get(long id) {
        return users.get(id);
    }

    public Optional<User> get(String username, String password) {
        return users.values()
                .stream()
                .filter(u -> u.getUsername().equals(username))
                .filter(u -> u.getPassword().equals(password))
                .findAny();
    }
}

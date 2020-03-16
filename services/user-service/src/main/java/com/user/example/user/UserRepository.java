package com.user.example.user;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    private final Map<Long, User> users = new HashMap<>();

    UserRepository() {
        users.put(1L, new User(1, "user1"));
        users.put(2L, new User(2, "user2"));
        users.put(3L, new User(3, "user3"));
        users.put(4L, new User(4, "user4"));
        users.put(5L, new User(5, "user5"));
    }

    User get(long id) {
        return users.get(id);
    }
}

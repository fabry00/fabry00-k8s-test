package com.user.example.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository repo;

    public User getUser(long id) {
        return repo.get(id);
    }

    public Optional<User> getUser(String username, String password) {
        return repo.get(username, password);
    }
}

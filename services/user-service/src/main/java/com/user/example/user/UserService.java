package com.user.example.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository repo;

    public User getUser(long id) {
        return repo.get(id);
    }

    public Optional<User> getUser(String username, String password) {
        log.info("Checking user: {}, {}", username, password);
        return repo.get(username, password);
    }
}

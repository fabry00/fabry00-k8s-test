package com.user.example.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository repo;

    public User getUser(long id) {
        return repo.get(id);
    }
}

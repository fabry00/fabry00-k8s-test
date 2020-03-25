package com.user.example.user;

import com.user.example.authenticaiton.JwtTokenUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository repo;
    private final JwtTokenUtil tokenUtil;

    public Optional<User> getUser(long id) {
        return repo.get(id);
    }

    public Optional<User> getUser(String username, String password) {
        log.info("Checking user: {}, {}", username, password);
        return repo.get(username, password);
    }

    public Optional<User> getUserFromToken(String token) {
        log.info("getUserFromToken:", token);
        return getUser(tokenUtil.getUserIdFromToken(token));
    }
}

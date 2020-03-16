package com.user.example.user;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService  userService;

    @GetMapping("/{id}")
    public User user(@PathVariable(value = "id") long id) {
        return userService.getUser(id);
    }
}
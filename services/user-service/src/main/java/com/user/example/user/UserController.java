package com.user.example.user;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {

    private final UserService  userService;

    @GetMapping("/user")
    public User user(@RequestParam(value = "id") long id) {
        return userService.getUser(id);
    }
}
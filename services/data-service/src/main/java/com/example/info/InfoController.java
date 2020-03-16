package com.example.info;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class InfoController {

    private final Info info;

    @GetMapping("/info")
    public Info info() {
        return info;
    }
}
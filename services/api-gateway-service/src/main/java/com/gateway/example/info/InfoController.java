package com.gateway.example.info;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class InfoController {

    private final Info info;
    private final InfoService infoService;

    @GetMapping("/api/info")
    public Info info() {
        info.setHealth(infoService.getHealth());
        return info;
    }
}
package com.user.example.user;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
class User {

    private final long id;
    private final String username;

    User(long id, String username) {
        this.id = id;
        this.username = username;
    }

}
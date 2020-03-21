package com.user.example.authenticaiton;

import com.user.example.user.User;
import com.user.example.user.UserService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class JwtAuthenticationController {
    //private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserService userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        //authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final Optional<User> userDetails = userDetailsService
                .getUser(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        if (userDetails.isPresent()) {
            final String token = jwtTokenUtil.generateToken(userDetails.get());
            return ResponseEntity.ok(new JwtResponse(token, userDetails.get()));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ErrorLogin.builder()
                .error(HttpStatus.UNAUTHORIZED.name())
                .message("Wrong credentials")
                .build());
    }

    @Builder
    @Data
    static class ErrorLogin implements Serializable {
        private final String error;
        private final String message;
    }

//    private void authenticate(String username, String password) throws Exception {
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//        } catch (DisabledException e) {
//            throw new Exception("USER_DISABLED", e);
//        } catch (BadCredentialsException e) {
//            throw new Exception("INVALID_CREDENTIALS", e);
//        }
//    }
}
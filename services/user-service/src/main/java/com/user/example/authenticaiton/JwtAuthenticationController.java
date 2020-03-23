package com.user.example.authenticaiton;

import com.user.example.config.AppProperties;
import com.user.example.user.User;
import com.user.example.user.UserService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.Optional;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
public class JwtAuthenticationController {
    //private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserService userDetailsService;
    private AppProperties properties;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        // Just for testing. TODO delete the following log
        log.info("JTW SECRET {}", properties.getJwtSecret());
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

    @RequestMapping(value = "/verify/{token}", method = RequestMethod.GET)
    public ResponseEntity<?> createAuthenticationToken(@PathVariable(value = "token") String token) throws Exception {

        log.info("Token to verify {}", token);
        log.info("User from JWT: " + jwtTokenUtil.getUsernameFromToken(token));
        log.info("Expiration JWT: " + jwtTokenUtil.getExpirationDateFromToken(token));

        boolean isTokenValid = jwtTokenUtil.validateToken(token);
        log.info("JWT valid: " + isTokenValid);
        HttpStatus status = isTokenValid ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status)
                .build();
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
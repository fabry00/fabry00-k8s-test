//package com.gateway.example.auth;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//
//@RequestMapping("/api")
//public class AuthController {
//
//    private UserService userService;
//
//
//    public AuthController(UserService userService) {
//        this.userService = userService;
//    }
//
//
//    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
//    public ResponseEntity<?> createAuthenticationToken(@RequestBody String authenticationRequest) throws Exception {
//        return userService.authUser(authenticationRequest);
//    }
//
//}

package com.medilabo.gateway.controller;


import com.medilabo.gateway.config.JWTService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
	
	private final JWTService jWTService;

    @PostMapping("/login")
    public Mono<String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if ("admin".equals(username) && "password".equals(password)) {
            String token = jWTService.generateToken(username);
            return Mono.just("{ \"token\" : \"" + token + "\"}");
        }

        return Mono.just("Invalid username or password");
    }
}

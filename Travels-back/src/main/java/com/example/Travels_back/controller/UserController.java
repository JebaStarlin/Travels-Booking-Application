package com.example.Travels_back.controller;

import com.example.Travels_back.model.User;
import com.example.Travels_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public String register(@RequestBody User user){
        return userService.register(user);
    }
}

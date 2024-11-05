package com.example.Travels_back.controller;

import com.example.Travels_back.model.User;
import com.example.Travels_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<Map<String,Object>> register(@RequestBody User user){
        Map<String,Object> map = new HashMap<>();
        if(!userService.isUsernameAvailable(user.getUsername())){
            User user1 = new User();
            map.put("message", "Username Already Exist");
            map.put("user",user1);
            System.out.println("Username Exists");
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        User user1 = userService.register(user);
        map.put("message", "User Created");
        map.put("user",user1);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @GetMapping("/users")
    public List<User> allUsers(){
        return userService.findAll();
    }

    @GetMapping("/login")
    public String login(){
        return "Yes";
    }

}

package com.example.Travels_back.controller;

import com.example.Travels_back.model.User;
import com.example.Travels_back.service.JWTService;
import com.example.Travels_back.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JWTService jwtService;
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

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestBody User user){
        Map<String,Object> map = new HashMap<>();
        if(userService.verify(user)=="success"){
            String token = jwtService.generateToken(user.getUsername());
            map.put("Message","Account verified");
            map.put("token",token);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        map.put("Message","Account not found");
        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }
    @PostMapping("/username")
    public ResponseEntity<Map<String,Object>> getUsername(HttpServletRequest request){
        String authHeader = request.getHeader("Authorization");
        String token = authHeader.substring(7);
        String username = jwtService.extractUserName(token);
        Map<String,Object> map = new HashMap<>();
        if(username != null){
            map.put("message","username found");
            map.put("username",username);
            return new ResponseEntity<>(map,HttpStatus.OK);
        }
        map.put("message","username not found");
        return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
    }
    @GetMapping("/grt")
    public ResponseEntity<Map<String,Object>> get(){
        Map<String,Object> map = new HashMap<>();
        map.put("message","uhbrvuonvsf");
        return new ResponseEntity(map,HttpStatus.OK);
    }
}

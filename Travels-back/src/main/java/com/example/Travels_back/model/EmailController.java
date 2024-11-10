package com.example.Travels_back.model;

import com.example.Travels_back.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
public class EmailController {
    @Autowired
    private SendEmailService service;

    @PutMapping
    public String bookQuery(@RequestBody String body){
        service.sendEmail(body,"Booking Query");
        return "success";
    }
}

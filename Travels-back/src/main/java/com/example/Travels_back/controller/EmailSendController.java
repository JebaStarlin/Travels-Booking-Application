package com.example.Travels_back.controller;

import com.example.Travels_back.model.BookingEmail;
import com.example.Travels_back.model.ContactEmail;
import com.example.Travels_back.model.Vehicle;
import com.example.Travels_back.service.SendEmailService;
import com.example.Travels_back.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/mail")
public class EmailSendController {
    @Autowired
    private SendEmailService service;
    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/booking")
    public String bookQuery(@RequestBody BookingEmail body){
        Optional<Vehicle> v = vehicleService.getVehicleById(Integer.parseInt(body.getVehicleId()));
        String email = "This Email has been generated to enquire about a trip from "+body.getFrom()+" to "+body.getUsername()+" on "+body.getDate()+" in the vehicle "+v.toString()+"for "+body.getDays()+ " days";
        service.sendEmail(email,"Booking Query");
        return "success";
    }

    @PostMapping("/contact")
    public String contactEmail(@RequestBody ContactEmail contactEmail){
        String email = "This is a generated mail from contact page by "+contactEmail.getUsermail()+" with Description "+contactEmail.getUsermail();
        service.sendEmail(email,"Contact Query");
        return "success";
    }

}


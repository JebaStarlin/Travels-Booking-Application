package com.example.Travels_back.controller;

import com.example.Travels_back.model.Vehicle;
import com.example.Travels_back.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/details")
public class DataController {
    @Autowired
    private VehicleService vehicleService;
    @GetMapping("/vehicles")
    public ResponseEntity<Map<String,Object>> getVehicles(){
        Map<String,Object> reponse = new HashMap<>();
        List<Vehicle> vehicles = vehicleService.getVehicles();
        reponse.put("vehicles",vehicles);
        return new ResponseEntity<>(reponse, HttpStatus.OK);
    }
}

package com.example.Travels_back.controller;

import com.example.Travels_back.model.Vehicle;
import com.example.Travels_back.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/prices")
    public ResponseEntity<Map<String,Object>> getPrices(@RequestParam int days){
        Map<String,Object> reponse = new HashMap<>();
        List<Vehicle> vehicles = vehicleService.getPrice(days);
        reponse.put("vehicles",vehicles);
        return new ResponseEntity<>(reponse, HttpStatus.OK);
    }
}

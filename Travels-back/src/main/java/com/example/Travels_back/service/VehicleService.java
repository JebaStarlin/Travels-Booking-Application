package com.example.Travels_back.service;

import com.example.Travels_back.model.Vehicle;
import com.example.Travels_back.repo.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepo vehicleRepo;

    public List<Vehicle> getVehicles(){
        List<Vehicle> vehicles =vehicleRepo.findAll();

        return vehicles;
    }

    public List<Vehicle> getPrice(int days){
        List<Vehicle> vehicles = getVehicles();
        for(Vehicle v : vehicles){
            v.setPrice(v.getPrice()*days);
        }
        return vehicles;
    }
}

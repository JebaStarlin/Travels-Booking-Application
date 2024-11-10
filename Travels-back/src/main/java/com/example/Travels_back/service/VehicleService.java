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
        return vehicleRepo.findAll();
    }
}

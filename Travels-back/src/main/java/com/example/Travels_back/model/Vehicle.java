package com.example.Travels_back.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicleId;
    private String vehicleName;
    private int seats;
    private String vehicleType;
    private String color;
    private double price;

    public Vehicle(String vehicleName, int seats, String vehicleType, String color ,double price) {
        this.vehicleName = vehicleName;
        this.seats = seats;
        this.vehicleType = vehicleType;
        this.color = color;
        this.price = price;
    }
}

package com.example.Travels_back.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingEmail {
    private String vehicleId;
    private String username;
    private String from;
    private String to;
    private String date;
    private String days;
}

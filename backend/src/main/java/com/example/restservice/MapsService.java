package com.example.restservice;

import com.google.maps.DirectionsApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DirectionsResult;
import com.google.maps.model.TravelMode;

import java.io.IOException;

import org.springframework.stereotype.Service;

@Service
public class MapsService {

    private final GeoApiContext geoApiContext;

    public MapsService() {
        this.geoApiContext = new GeoApiContext.Builder()
                .apiKey("AIzaSyCdKeLeLwS5GmxFF5J_nVgtigX2XYRKB3s")
                .build();
    }

    public DirectionsResult getDirections(String origin, String destination, String mode) throws ApiException, InterruptedException, IOException {
        return DirectionsApi.newRequest(geoApiContext)
                .origin(origin)
                .destination(destination)
                .mode(TravelMode.valueOf(mode.toUpperCase()))
                .await();
    }
}
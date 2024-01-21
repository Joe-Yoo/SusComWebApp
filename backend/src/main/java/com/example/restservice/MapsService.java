package com.example.restservice;

import com.google.maps.DistanceMatrixApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.TravelMode;

import java.io.IOException;

import org.springframework.stereotype.Service;

@Service
public class MapsService {

    private final GeoApiContext geoApiContext;

    public MapsService() {
        this.geoApiContext = new GeoApiContext.Builder()
                .apiKey("APIKeyhere")
                .build();
    }

    public DistanceMatrix getDistances(String origin, String destination, String mode) throws ApiException, InterruptedException, IOException {
        return DistanceMatrixApi.newRequest(geoApiContext)
                .origins(origin)
                .destinations(destination)
                .mode(TravelMode.valueOf(mode.toUpperCase()))
                .await();
    }
}

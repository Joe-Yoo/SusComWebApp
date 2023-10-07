package com.example.restservice;

import com.google.maps.model.DistanceMatrix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/maps")
public class MapsController {

    @Autowired
    private MapsService mapsService;

    @GetMapping("/distance")
    public DistanceMatrix getDistance(@RequestParam String origin, @RequestParam String destination, @RequestParam String mode) throws Exception {
        return mapsService.getDistances(origin, destination, mode);
    }
}

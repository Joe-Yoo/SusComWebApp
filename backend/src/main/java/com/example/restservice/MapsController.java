package com.example.restservice;

import com.google.maps.model.DirectionsResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/maps")
public class MapsController {

    @Autowired
    private MapsService mapsService;

    @GetMapping("/directions")
    public DirectionsResult getDirections(@RequestParam String origin, @RequestParam String destination, @RequestParam String mode) throws Exception {
        return mapsService.getDirections(origin, destination, mode);
    }
}

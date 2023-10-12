package com.example.restservice;

import org.springframework.web.bind.annotation.*;


import static com.example.restservice.CFCalc.getCFCalc;

@RestController
public class CFController {
    private static CFCalc calc = getCFCalc();
    private static CommuteOption commuteOption = CommuteOption.WALKING;

    @GetMapping("/distance")
    public double getDistance() {
        return calc.getDistance();
    }

    @GetMapping("/emission")
    public double getEmissionFactor() {
        return calc.getEmissionFactor(commuteOption);
    }
    @RequestMapping(path = "/emission/{opt}", method = RequestMethod.GET)
    public double getEmissionFactor(@PathVariable int opt) {
        return calc.getEmissionFactor(CommuteOption.values()[opt]);
    }

    @GetMapping("/carbon")
    public double getCarbonEmission() {
        return calc.calcCF(commuteOption);
    }

    @RequestMapping(path = "/carbon/{opt}", method = RequestMethod.GET)
    public double getCarbonEmission(@PathVariable int opt) {
        return calc.calcCF(CommuteOption.values()[opt]);
    }

    @RequestMapping(path = "/carbon/{opt}/{dist}", method = RequestMethod.GET)
    public double getCarbonEmission(@PathVariable int opt, @PathVariable double dist) {
        return calc.calcCF(CommuteOption.values()[opt], dist);
    }

    @RequestMapping(path = "/carbon/{opt}/{dist}/{ppl}/{mileage}", method = RequestMethod.GET)
    public double getCarbonEmission(@PathVariable int opt, @PathVariable double dist, @PathVariable int ppl, @PathVariable double mileage) {
        return calc.calcCF(CommuteOption.values()[opt], dist, ppl, mileage);
    }

    @RequestMapping(path = "/update/commuteoption/{opt}", method = RequestMethod.PUT)
    public void updateCommuteOption(@PathVariable int opt) {
        commuteOption = CommuteOption.values()[opt];
    }

    @RequestMapping(path = "/update/distance/{dist}", method = RequestMethod.PUT)
    public void updateDistance(@PathVariable double dist) {
        calc.setDistance(dist);
    }

    @RequestMapping (path = "/update/rate/{opt}/{rate}", method = RequestMethod.PUT)
    public void updateRate(@PathVariable int opt, @PathVariable double rate) {
        calc.setRate(CommuteOption.values()[opt], rate);
    }

    @RequestMapping (path = "/update/carpool/{opt}/{ppl}", method = RequestMethod.PUT)
    public void updateCarpool(@PathVariable int opt, @PathVariable int ppl) {
        calc.setCarpool(CommuteOption.values()[opt], ppl);
    }

    @RequestMapping (path = "/update/mileage/{mileage}", method = RequestMethod.PUT)
    public void updateMileage(@PathVariable double mileage) {
        calc.setMilage(mileage);
    }
}

package com.gdonati.EstacioneAi.controller;

import com.gdonati.EstacioneAi.model.service.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/car")
public class CarsController {

    @Autowired
    private final CarsService carService;

    public CarsController(CarsService carService) {
        this.carService = carService;
    }

    @PostMapping("/")
    public void createCar(){

    }
}

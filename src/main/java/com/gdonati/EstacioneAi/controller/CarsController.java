package com.gdonati.EstacioneAi.controller;

import com.gdonati.EstacioneAi.model.Car;
import com.gdonati.EstacioneAi.model.service.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarsController {

    @Autowired
    private final CarsService carsService;

    public CarsController(CarsService carsService) {
        this.carsService = carsService;
    }

    @PostMapping("/")
    public Car createCar(@RequestBody Car car){return carsService.createCar(car);}

    @GetMapping("/listcars/")
    public List<Car> getAll(){return carsService.searchAllCars();}

    @GetMapping("/id")
    public Car seachCar(@RequestBody Long id){return carsService.searchCar(id);}


}

package com.gdonati.EstacioneAi.controller;

import com.gdonati.EstacioneAi.model.Car;
import com.gdonati.EstacioneAi.service.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarsController {

    @Autowired
    private final CarsService carsService;

    public CarsController(CarsService carsService) { this.carsService = carsService;}

    @PostMapping("/")
    public Car createCar(@RequestBody Car car){return carsService.createCar(car);}

    @GetMapping("/carlist")
    public List<Car> getAll(){return carsService.searchAllCars();}

    @GetMapping("/{id}")
    public Car seachCar(@PathVariable Long id){return carsService.searchCar(id);}

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id){carsService.deleteCar(id);}


}

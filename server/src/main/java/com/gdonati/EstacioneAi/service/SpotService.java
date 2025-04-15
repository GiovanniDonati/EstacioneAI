package com.gdonati.EstacioneAi.service;

import com.gdonati.EstacioneAi.model.Car;
import com.gdonati.EstacioneAi.model.Spot;
import com.gdonati.EstacioneAi.repository.CarsRepository;
import com.gdonati.EstacioneAi.repository.SpotRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpotService {

    private final SpotRepository spotRepository;
    private final CarsService carsService;

    public SpotService(SpotRepository spotRepository, CarsService carsService) {
        this.spotRepository = spotRepository;
        this.carsService = carsService;
    }

    public List<Spot> searchAllSpot(){return spotRepository.findAll();}

    public Spot createSpot(Spot spot){return spotRepository.save(spot);}

    public String updateSpotCar(Long id, Long car_id){
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Spot não encontrado"));

        try {
            carsService.searchCar(car_id);
        }
        catch (RuntimeException e) {
            throw new RuntimeException("Carro não encontrado");
        }
        try {
            Car car = carsService.searchCar(car_id);
            spot.setCar(car);
            System.out.println("Carro atualizado com sucesso");
        } catch (Exception e) {
            throw new RuntimeException("Erro ao atualizar o carro no estacionamento");
        }

        spotRepository.save(spot);

        return "Carro atualizado com sucesso";
    }

    public Spot searchSpot(Long id){return spotRepository.findById(id).orElse(null);}

    public void deleteSpot(Long id){spotRepository.deleteById(id);}
}

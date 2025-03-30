package com.gdonati.EstacioneAi.service;

import com.gdonati.EstacioneAi.model.Spot;
import com.gdonati.EstacioneAi.repository.SpotRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpotService {

    private final SpotRepository spotRepository;

    public SpotService(SpotRepository spotRepository) {
        this.spotRepository = spotRepository;
    }

    public List<Spot> searchAllSpot(){return spotRepository.findAll();}

    public Spot createSpot(Spot spot){return spotRepository.save(spot);}

    public Spot searchSpot(Long id){return spotRepository.findById(id).orElse(null);}

    public void deleteSpot(Long id){spotRepository.deleteById(id);}
}

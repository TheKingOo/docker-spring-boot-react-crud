package org.cours.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.cours.modele.Voiture;
import org.cours.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class VoitureService {
    @Autowired
    private VoitureRepo voitureRepo;
    public List<Voiture> getAllVoitures() {
        List<Voiture> voitures=new ArrayList<>();
        voitureRepo.findAll().forEach(voitures::add);
        return voitures;
    }
    public void ajouterVoiture(Voiture voiture) {
        voitureRepo.save(voiture);
    }
    public void modifierVoiture(long id, Voiture voiture) {
        voitureRepo.save(voiture);
    }
    public void supprimerVoiture(long id) {
        voitureRepo.deleteById(id);
    }
}
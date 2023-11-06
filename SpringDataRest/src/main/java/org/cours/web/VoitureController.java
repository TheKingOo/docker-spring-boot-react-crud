package org.cours.web;

import org.cours.modele.Voiture;
import org.cours.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
    @Autowired
    private VoitureService voitureService;
    @RequestMapping("/voitures")
    public List<Voiture> getVoitures(){
        return voitureService.getAllVoitures();
    }

    @RequestMapping(method= RequestMethod.POST, value="/voitures")
    public void ajouterVoiture(@RequestBody Voiture voiture) {
        voitureService.ajouterVoiture(voiture);
    }
    @RequestMapping(method=RequestMethod.PUT, value="/voitures/{id}")
    public void modifierVoiture(@RequestBody Voiture voiture, @PathVariable Integer id) {
        voitureService.modifierVoiture(id, voiture);
    }
    @RequestMapping(method=RequestMethod.DELETE, value="/voitures/{id}")
    public void supprimerVoiture(@PathVariable Integer id) {
        voitureService.supprimerVoiture(id);
    }
}
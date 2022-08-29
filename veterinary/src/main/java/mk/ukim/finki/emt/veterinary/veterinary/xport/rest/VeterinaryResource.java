package mk.ukim.finki.emt.veterinary.veterinary.xport.rest;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.services.impl.VeterinaryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/veterinary")
@AllArgsConstructor
public class VeterinaryResource {

    private final VeterinaryService veterinaryService;

    @GetMapping
    public List<Veterinary> getAllVeterinaries(){
        return veterinaryService.findAll();
    }
}

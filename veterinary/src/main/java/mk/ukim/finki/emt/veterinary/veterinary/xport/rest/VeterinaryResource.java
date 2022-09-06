package mk.ukim.finki.emt.veterinary.veterinary.xport.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.Config.filters.JwtAuthenticationFilter;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinarianForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.impl.VeterinaryService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api/veterinary")
@CrossOrigin
@AllArgsConstructor
public class VeterinaryResource {

    private final JwtAuthenticationFilter filter;
    private final VeterinaryService veterinaryService;

    @GetMapping
    public List<Veterinary> getAllVeterinaries(){
        return veterinaryService.findAll();
    }

    @PostMapping
    public void addVeterinary(@RequestBody VeterinaryForm veterinaryForm){
        veterinaryService.saveVeterinary(veterinaryForm);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVeterinary(@PathVariable String id){
        VeterinaryId veterinaryId = new VeterinaryId(id);
        veterinaryService.deleteVeterinary(veterinaryId);
    }

    @GetMapping("/{id}")
    public Veterinary getVeterinary(@PathVariable String id){
        VeterinaryId veterinaryId = new VeterinaryId(id);
        return veterinaryService.findById(veterinaryId);
    }

    @GetMapping("/{id}/veterinarians")
    public List<Veterinarian> getVeterinarians(@PathVariable String id){
        VeterinaryId veterinaryId = new VeterinaryId(id);
        Veterinary veterinary =  veterinaryService.findById(veterinaryId);
        return veterinary.getVeterinarians();
    }

    @PutMapping("/edit/{id}")
    public void editVeterinary(@PathVariable String id,
                               @RequestBody VeterinaryForm veterinaryForm){
        VeterinaryId veterinaryId = new VeterinaryId(id);
        veterinaryService.editVeterinary(veterinaryId, veterinaryForm);
    }

    @PostMapping("/{id}/veterinarian/add")
    public void addVeterinarian(@PathVariable String id,
                               @RequestBody VeterinarianForm veterinarianForm){
        VeterinaryId veterinaryId = new VeterinaryId(id);
        veterinaryService.addVeterinarian(veterinaryId, veterinarianForm);
    }


    @PostMapping("/login")
    public String doLogin(HttpServletRequest request,
                          HttpServletResponse response) throws JsonProcessingException {
        Authentication auth = this.filter.attemptAuthentication(request, response);
        return this.filter.generateJwt(response, auth);

    }

}

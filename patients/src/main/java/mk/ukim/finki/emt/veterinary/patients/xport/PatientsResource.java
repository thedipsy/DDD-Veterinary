package mk.ukim.finki.emt.veterinary.patients.xport;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Owner;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.patients.services.IOwnerService;
import mk.ukim.finki.emt.veterinary.patients.services.forms.AnimalForm;
import mk.ukim.finki.emt.veterinary.patients.services.forms.OwnerForm;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/owner")
@CrossOrigin
@AllArgsConstructor
public class PatientsResource {

    private final IOwnerService ownerService;

    @GetMapping
    public List<Owner> getAllOwners(){
        return ownerService.findAll();
    }

    @PostMapping
    public void addOwner(@RequestBody OwnerForm ownerForm){
        ownerService.saveOwner(ownerForm);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteOwner(@PathVariable String id){
        OwnerId ownerId = new OwnerId(id);
        ownerService.deleteOwner(ownerId);
    }

    @GetMapping("/{id}")
    public Owner getOwner(@PathVariable String id){
        OwnerId ownerId = new OwnerId(id);
        return ownerService.findById(ownerId);
    }

    @PutMapping("/edit/{id}")
    public void editOwner(@PathVariable String id,
                               @RequestBody OwnerForm ownerForm){
        OwnerId ownerId = new OwnerId(id);
//        ownerService.(veterinaryId, veterinaryForm);
    }

    @PostMapping("/{id}/owner/add")
    public void addVeterinarian(@PathVariable String id,
                               @RequestBody AnimalForm animalForm){
        OwnerId ownerId = new OwnerId(id);
        ownerService.addAnimal(ownerId, animalForm);
    }
}

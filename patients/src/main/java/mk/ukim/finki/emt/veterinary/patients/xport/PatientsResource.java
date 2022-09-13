package mk.ukim.finki.emt.veterinary.patients.xport;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.WeightBaseUnit;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Animal;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Owner;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.AnimalId;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.patients.services.IOwnerService;
import mk.ukim.finki.emt.veterinary.patients.services.forms.AnimalForm;
import mk.ukim.finki.emt.veterinary.patients.services.forms.OwnerForm;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
        ownerService.editOwner(ownerId, ownerForm);
    }

    @PostMapping("/{id}/patient")
    public void addPatient(@PathVariable String id,
                               @RequestBody AnimalForm animalForm){
        OwnerId ownerId = new OwnerId(id);
        ownerService.addAnimal(ownerId, animalForm);
    }

    @GetMapping("/patients")
    public List<Animal> getPatients(){
        List<Owner> owners = ownerService.findAll();
        List<Animal> patients = new ArrayList<>();
        for(Owner owner : owners){
            patients.addAll(owner.getAnimalsList());
        }

       return patients;
    }


    @GetMapping("/{id}/patient/{patientId}")
    public Animal getAnimal(@PathVariable String id,
                                  @PathVariable String patientId){
        OwnerId ownerId = new OwnerId(id);
        AnimalId patientId1 = new AnimalId(patientId);
        return ownerService.findPatientById(ownerId, patientId1);
    }

    @PutMapping("/{id}/patient/edit/{patientId}")
    public void editPatient(@PathVariable String id,
                                 @PathVariable String patientId,
                                 @RequestBody AnimalForm animalForm){
        OwnerId ownerId = new OwnerId(id);
        AnimalId patientId1 = new AnimalId(patientId);
        ownerService.editPatient(ownerId, patientId1, animalForm);
    }


    @DeleteMapping("/{id}/patient/delete/{patientId}")
    public void deletePatient(@PathVariable String id,
                                   @PathVariable String patientId){
        OwnerId ownerId = new OwnerId(id);
        AnimalId patientId1 = new AnimalId(patientId);
        ownerService.deleteAnimal(ownerId, patientId1);
    }

    @GetMapping("/patients/animalSpecies")
    public List<AnimalSpecie> getAnimalSpecies(){
        return List.of(AnimalSpecie.values());
    }

    @GetMapping("/patients/weightUnits")
    public List<WeightBaseUnit> getWeightUnits(){
        return List.of(WeightBaseUnit.values());
    }

}

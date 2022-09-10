package mk.ukim.finki.emt.veterinary.patients.domain.models;

import lombok.Data;
import lombok.Getter;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.patients.domain.exceptions.AnimalNotExistsException;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.AnimalId;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Microchip;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Weight;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import org.hibernate.annotations.NotFound;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "owner")
@Data
public class Owner extends AbstractEntity<OwnerId> {

    private String name;
    private String surname;
    private String phone;
    private String email;
    private Address address;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Animal> animalsList;

    public Owner(){
        super(OwnerId.randomId(OwnerId.class));
    }

    public static Owner build(String name, String surname, String phone, String email, Address address) {
        Owner owner = new Owner();
        owner.name = name;
        owner.surname = surname;
        owner.phone = phone;
        owner.email = email;
        owner.address = address;

        return owner;
    }

    public Animal addAnimal(String name,
                            Date birthDate,
                            AnimalSpecie animalSpecie,
                            String breed,
                            Microchip microchip,
                            Weight weight,
                            Gender gender) {
        var animal = new Animal(name, birthDate, animalSpecie, breed, microchip, weight, gender);
        animalsList.add(animal);
        return animal;
    }

    public void removeAnimal(AnimalId animalId) {
        animalsList.removeIf(a -> a.getId().equals(animalId));
    }

    public Optional<Animal> getAnimal(AnimalId animalId) {
        return animalsList.stream().filter(v -> v.getId().equals(animalId)).findFirst();
    }

    public void editAnimal(AnimalId animalId,
                           String name,
                           Date birthDate,
                           AnimalSpecie animalSpecie,
                           String breed,
                           Microchip microchip,
                           Weight weight,
                           Gender gender) {
        Animal animal = getAnimal(animalId).orElseThrow(AnimalNotExistsException::new);
        animal.setName(name);
        animal.setBirthDate(birthDate);
        animal.setAnimalSpecie(animalSpecie);
        animal.setBreed(breed);
        animal.setMicrochip(microchip);
        animal.setWeight(weight);
        animal.setGender(gender);

        removeAnimal(animalId); //delete the old one
        animalsList.add(animal); //add the edited one
    }

}

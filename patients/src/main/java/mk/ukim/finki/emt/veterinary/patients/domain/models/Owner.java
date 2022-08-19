package mk.ukim.finki.emt.veterinary.patients.domain.models;

import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
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

@Entity
@Table(name = "owner")
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

}

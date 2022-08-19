package mk.ukim.finki.emt.veterinary.patients.domain.models;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.AnimalId;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Microchip;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Weight;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "animal")
@Getter
public class Animal extends AbstractEntity<AnimalId> {

    @Column(nullable = false)
    private String name;
    private Date birthDate;

    @Column(nullable = false)
    private AnimalSpecie animalSpecie;
    private String breed;

    @AttributeOverrides({
            @AttributeOverride(name="serialNumber", column = @Column(name="microchip_serialNumber")),
            @AttributeOverride(name="dateImplemented", column = @Column(name="microchip_dateImplemented"))
    })
    private Microchip microchip;

    @AttributeOverrides({
            @AttributeOverride(name="baseUnit", column = @Column(name="weight_baseUnit", nullable = false)),
            @AttributeOverride(name="amount", column = @Column(name="weight_amount", nullable = false))
    })
    private Weight weight;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    public Animal(){
        super(AnimalId.randomId(AnimalId.class));
    }

    public Animal(String name, Date birthDate, AnimalSpecie animalSpecie, String breed, Microchip microchip, Weight weight, Gender gender) {
        super(AnimalId.randomId(AnimalId.class));
        this.name = name;
        this.birthDate = birthDate;
        this.animalSpecie = animalSpecie;
        this.breed = breed;
        this.microchip = microchip;
        this.weight = weight;
        this.gender = gender;
    }

}

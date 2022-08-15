package mk.ukim.finki.emt.veterinary.patients.domain.entitites;

import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.patients.domain.entitites.id.PatientId;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Microchip;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Weight;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "patient")
public class Patient extends AbstractEntity<PatientId> {

    private String name;
    private Date birthDate;
    private AnimalSpecie animalSpecie;
    private String breed;

    @AttributeOverrides({
            @AttributeOverride(name="serialNumber", column = @Column(name="microchip_serialNumber")),
            @AttributeOverride(name="dateImplemented", column = @Column(name="microchip_dateImplemented"))
    })
    private Microchip microchip;

    @AttributeOverrides({
            @AttributeOverride(name="baseUnit", column = @Column(name="weight_baseUnit")),
            @AttributeOverride(name="amount", column = @Column(name="weight_amount"))
    })
    private Weight weight;

    @Enumerated(EnumType.STRING)
    private Gender gender;

}

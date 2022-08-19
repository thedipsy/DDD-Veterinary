package mk.ukim.finki.emt.veterinary.patients.services.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Microchip;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Weight;
import org.hibernate.annotations.NotFound;

import java.util.Date;

@Data
public class AnimalForm {

    @NotFound
    private String name;
    @NotFound
    private Date birthDate;
    @NotFound
    private AnimalSpecie animalSpecie;
    @NotFound
    private String breed;
    @NotFound
    private Microchip microchip;
    @NotFound
    private Weight weight;
    @NotFound
    private Gender gender;

}

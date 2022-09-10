package mk.ukim.finki.emt.veterinary.patients.services.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Microchip;
import mk.ukim.finki.emt.veterinary.patients.domain.valueobjects.Weight;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class AnimalForm {

    @NotNull
    private String name;
    @NotNull
    private Date birthDate;
    @NotNull
    private AnimalSpecie animalSpecie;
    @NotNull
    private String breed;
    private Microchip microchip;
    @NotNull
    private Weight weight;
    @NotNull
    private Gender gender;

}

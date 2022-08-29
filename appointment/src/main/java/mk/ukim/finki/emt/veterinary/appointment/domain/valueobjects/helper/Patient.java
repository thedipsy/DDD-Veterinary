package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.PatientId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.enumeration.Gender;

import java.util.Date;

//TODO CHECK
@Getter
public class Patient {

    private PatientId id;
    private String name;
    private Date birthDate;
    private AnimalSpecie animalSpecie;
    private String breed;
    private Microchip microchip;
    private Weight weight;
    private Gender gender;

    public Patient(){
        this.id = PatientId.randomId(PatientId.class);
        this.name = "";
        this.birthDate = null;
        this.animalSpecie = null;
        this.breed = "";
        this.microchip = null;
        this.weight = null;
        this.gender = null;
    }

    @JsonCreator
    public Patient(@JsonProperty("id") PatientId id,
                        @JsonProperty("name") String name,
                        @JsonProperty("birthDate") Date birthDate,
                        @JsonProperty("animalSpecie") AnimalSpecie animalSpecie,
                        @JsonProperty("breed") String breed,
                        @JsonProperty("microchip") Microchip microchip,
                        @JsonProperty("weight") Weight weight,
                        @JsonProperty("gender") Gender gender) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.animalSpecie = animalSpecie;
        this.breed = breed;
        this.microchip = microchip;
        this.weight = weight;
        this.gender = gender;
    }

}

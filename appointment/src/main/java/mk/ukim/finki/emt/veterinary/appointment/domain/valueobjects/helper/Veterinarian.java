package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.VeterinarianId;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

import java.util.Date;

//TODO CHECK
@Getter
public class Veterinarian implements ValueObject {

    private VeterinarianId id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Address address;
    private Date dateOfEmployment;

    public Veterinarian(){
        this.id = VeterinarianId.randomId(VeterinarianId.class);
        this.name = "";
        this.surname = "";
        this.email = "";
        this.phone = "";
        this.address = Address.build("","","","");
        this.dateOfEmployment = null;
    }

    @JsonCreator
    public Veterinarian(@JsonProperty("id") VeterinarianId id,
                   @JsonProperty("name") String name,
                   @JsonProperty("surname") String surname,
                   @JsonProperty("email") String email,
                   @JsonProperty("phone") String phone,
                   @JsonProperty("address") Address address,
                   @JsonProperty("dateOfEmployment") Date dateOfEmployment) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.dateOfEmployment = dateOfEmployment;
    }

}

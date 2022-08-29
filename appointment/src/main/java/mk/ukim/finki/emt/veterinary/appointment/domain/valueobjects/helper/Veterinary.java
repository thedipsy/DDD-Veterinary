package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

@Getter
public class Veterinary implements ValueObject {

    private VeterinaryId id;
    private String name;
    private Address address;

    @JsonCreator
    public Veterinary(@JsonProperty("id") VeterinaryId id,
                        @JsonProperty("name") String name,
                        @JsonProperty("address") Address address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

}

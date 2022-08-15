package mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address implements ValueObject {

    private final String streetName;
    private final String houseNumber;
    private final String city;
    private final String postalCode;

    protected Address() {
        this.streetName = "";
        this.houseNumber = "";
        this.city = "";
        this.postalCode = "";
    }

}
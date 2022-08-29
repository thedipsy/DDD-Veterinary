package mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects;

import lombok.Getter;
import lombok.NonNull;
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

    public Address(@NonNull String streetName, @NonNull String houseNumber, @NonNull String city, @NonNull String postalCode) {
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.city = city;
        this.postalCode = postalCode;
    }

    public static Address build(String streetName, String houseNumber, String city, String postalCode){
        return new Address(streetName, houseNumber, city, postalCode);
    }
}
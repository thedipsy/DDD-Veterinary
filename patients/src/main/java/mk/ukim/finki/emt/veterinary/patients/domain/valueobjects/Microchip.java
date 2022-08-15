package mk.ukim.finki.emt.veterinary.patients.domain.valueobjects;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;
import java.util.Date;

@Embeddable
@Getter
public class Microchip implements ValueObject {

    private final String serialNumber;
    private final Date dateImplemented;

    protected Microchip() {
        this.serialNumber = "";
        this.dateImplemented = null;
    }

}

package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;
import java.util.Date;

//TODO CHECK
@Getter
public class Microchip implements ValueObject {

    private final String serialNumber;
    private final Date dateImplemented;

    public Microchip() {
        this.serialNumber = "";
        this.dateImplemented = new Date();
    }

}

package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects;

import lombok.Getter;
import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Prescription implements ValueObject {

    private final String drug;
    private final String dosage;

    public Prescription(){
        this.drug = "";
        this.dosage = "";
    }

}

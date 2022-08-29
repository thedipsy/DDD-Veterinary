package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

import javax.persistence.Embeddable;

@Embeddable
public class PatientId extends DomainObjectId {

    public PatientId() {
        super(PatientId.randomId(PatientId.class).getId());
    }

    public PatientId(@NonNull String uuid) {
        super(uuid);
    }

}

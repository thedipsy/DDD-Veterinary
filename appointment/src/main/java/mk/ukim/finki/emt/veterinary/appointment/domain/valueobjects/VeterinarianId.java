package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

import javax.persistence.Embeddable;

@Embeddable
public class VeterinarianId extends DomainObjectId {

    public VeterinarianId() {
        super(VeterinarianId.randomId(VeterinarianId.class).getId());
    }

    public VeterinarianId(@NonNull String uuid) {
        super(uuid);
    }

}

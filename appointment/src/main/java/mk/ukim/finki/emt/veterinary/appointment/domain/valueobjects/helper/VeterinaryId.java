package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class VeterinaryId extends DomainObjectId {

    public VeterinaryId() {
        super(VeterinaryId.randomId(VeterinaryId.class).getId());
    }

    public VeterinaryId(@NonNull String uuid) {
        super(uuid);
    }
}

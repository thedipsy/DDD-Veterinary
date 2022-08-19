package mk.ukim.finki.emt.veterinary.veterinary.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class VeterinaryId extends DomainObjectId {

    private VeterinaryId() {
        super(VeterinaryId.randomId(VeterinaryId.class).getId());
    }

    public VeterinaryId(@NonNull String uuid) {
        super(uuid);
    }

    public static VeterinaryId of(String uuid) {
        VeterinaryId p = new VeterinaryId(uuid);
        return p;
    }

}

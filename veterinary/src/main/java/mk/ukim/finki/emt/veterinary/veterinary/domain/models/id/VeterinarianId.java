package mk.ukim.finki.emt.veterinary.veterinary.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class VeterinarianId extends DomainObjectId {

    private VeterinarianId() {
        super(VeterinarianId.randomId(VeterinarianId.class).getId());
    }

    public VeterinarianId(@NonNull String uuid) {
        super(uuid);
    }

    public static VeterinarianId of(String uuid) {
        VeterinarianId p = new VeterinarianId(uuid);
        return p;
    }

}

package mk.ukim.finki.emt.veterinary.patients.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class OwnerId extends DomainObjectId {

    private OwnerId() {
        super(OwnerId.randomId(OwnerId.class).getId());
    }

    public OwnerId(@NonNull String uuid) {
        super(uuid);
    }

    public static OwnerId of(String uuid) {
        OwnerId p = new OwnerId(uuid);
        return p;
    }

}

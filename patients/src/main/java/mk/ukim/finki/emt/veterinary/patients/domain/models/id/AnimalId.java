package mk.ukim.finki.emt.veterinary.patients.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class AnimalId extends DomainObjectId {

    private AnimalId() {
        super(AnimalId.randomId(AnimalId.class).getId());
    }

    public AnimalId(@NonNull String uuid) {
        super(uuid);
    }

    public static AnimalId of(String uuid) {
        AnimalId p = new AnimalId(uuid);
        return p;
    }

}

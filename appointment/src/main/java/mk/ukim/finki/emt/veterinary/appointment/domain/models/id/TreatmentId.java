package mk.ukim.finki.emt.veterinary.appointment.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class TreatmentId extends DomainObjectId {

    private TreatmentId() {
        super(TreatmentId.randomId(TreatmentId.class).getId());
    }

    public TreatmentId(@NonNull String uuid) {
        super(uuid);
    }

    public static TreatmentId of(String uuid) {
        TreatmentId p = new TreatmentId(uuid);
        return p;
    }

}

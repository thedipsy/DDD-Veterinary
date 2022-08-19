package mk.ukim.finki.emt.veterinary.appointment.domain.models.id;

import lombok.NonNull;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

public class AppointmentId extends DomainObjectId {

    private AppointmentId() {
        super(AppointmentId.randomId(AppointmentId.class).getId());
    }

    public AppointmentId(@NonNull String uuid) {
        super(uuid);
    }

    public static AppointmentId of(String uuid) {
        AppointmentId p = new AppointmentId(uuid);
        return p;
    }

}

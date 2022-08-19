package mk.ukim.finki.emt.veterinary.appointment.domain.models;

import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.AppointmentStatus;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.AppointmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.PatientId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.VeterinarianId;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="treatment")
public class Appointment extends AbstractEntity<AppointmentId> {

    @Column(nullable = false)
    private AppointmentStatus status;

    @Column(nullable = false)
    private Date date;

    @AttributeOverrides({
            @AttributeOverride(name="id", column = @Column(name="patientId", nullable = false))
    })
    private PatientId patientId;

    @AttributeOverrides({
            @AttributeOverride(name="id", column = @Column(name="patientId", nullable = false))
    })
    private VeterinarianId veterinarianId;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Treatment> prescriptionList;

    public Appointment(){
        super(AppointmentId.randomId(AppointmentId.class));
    }

}

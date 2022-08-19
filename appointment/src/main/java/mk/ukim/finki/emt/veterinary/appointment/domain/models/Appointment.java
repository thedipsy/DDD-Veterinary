package mk.ukim.finki.emt.veterinary.appointment.domain.models;

import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.AppointmentStatus;
import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.TreatmentType;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.AppointmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.TreatmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.*;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;

import javax.persistence.*;
import java.util.ArrayList;
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
    private List<Treatment> treatmentList;

    public Appointment(){
        super(AppointmentId.randomId(AppointmentId.class));
    }

    public Appointment(Date date, PatientId patientId, VeterinarianId veterinarianId) {
        super(AppointmentId.randomId(AppointmentId.class));
        this.status = AppointmentStatus.PENDING;
        this.date = date;
        this.patientId = patientId;
        this.veterinarianId = veterinarianId;
        this.treatmentList = new ArrayList<>();
    }

    public Treatment addTreatment(TreatmentType treatmentType, String description, Prescription dosage) {
        var treatment = new Treatment(treatmentType, description, dosage);
        treatmentList.add(treatment);
        return treatment;
    }

    public void removeTreatment(TreatmentId treatmentId) {
        treatmentList.removeIf(t -> t.getId().equals(treatmentId));
    }

}

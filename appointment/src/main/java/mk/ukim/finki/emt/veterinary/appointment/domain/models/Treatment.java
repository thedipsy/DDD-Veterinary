package mk.ukim.finki.emt.veterinary.appointment.domain.models;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.TreatmentType;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.TreatmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.Prescription;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.DomainObjectId;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="treatment")
@Getter
public class Treatment extends AbstractEntity<TreatmentId> {

    private TreatmentType treatmentType;
    private String description;
    private Prescription dosage;

    public Treatment(){
        super(TreatmentId.randomId(TreatmentId.class));
    }

    public Treatment(TreatmentType treatmentType, String description, Prescription dosage) {
        super(DomainObjectId.randomId(TreatmentId.class));
        this.treatmentType = treatmentType;
        this.description = description;
        this.dosage = dosage;
    }
}

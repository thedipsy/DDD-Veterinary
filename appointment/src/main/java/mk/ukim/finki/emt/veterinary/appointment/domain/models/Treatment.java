package mk.ukim.finki.emt.veterinary.appointment.domain.models;

import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.TreatmentType;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.TreatmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.Prescription;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="treatment")
public class Treatment extends AbstractEntity<TreatmentId> {

    private TreatmentType treatmentType;
    private String description;
    private Prescription dosage;

}

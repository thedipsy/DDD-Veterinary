package mk.ukim.finki.emt.veterinary.appointment.service.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.appointment.domain.enumeration.TreatmentType;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.Prescription;

import javax.validation.constraints.NotNull;

@Data
public class TreatmentForm {

    @NotNull
    private TreatmentType treatmentType;
    @NotNull
    private String description;
    @NotNull
    private Prescription dosage;

}

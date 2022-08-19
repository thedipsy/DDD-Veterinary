package mk.ukim.finki.emt.veterinary.appointment.service.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.Treatment;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.PatientId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.VeterinarianId;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Data
public class AppointmentForm {

    @NotNull
    private Date date;
    @NotNull
    private PatientId patientId;
    @NotNull
    private VeterinarianId veterinarianId;
    @NotNull
    private List<Treatment> treatmentList;

}

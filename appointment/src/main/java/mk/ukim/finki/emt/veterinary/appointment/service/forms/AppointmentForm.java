package mk.ukim.finki.emt.veterinary.appointment.service.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper.Patient;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper.Veterinarian;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class AppointmentForm {

    @NotNull
    private Date date;
    @NotNull
    private Patient patient;
    @NotNull
    private Veterinarian veterinarian;
    @NotNull
    private List<TreatmentForm> treatmentList = new ArrayList<>();

}

package mk.ukim.finki.emt.veterinary.appointment.xport.client;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.Appointment;
import mk.ukim.finki.emt.veterinary.appointment.service.IAppointmentService;
import mk.ukim.finki.emt.veterinary.appointment.service.forms.AppointmentForm;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointment")
@CrossOrigin
@AllArgsConstructor
public class AppointmentResource {

    private final IAppointmentService appointmentService;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.findAll();
    }

    @PostMapping
    public void bookAppointment(@RequestBody AppointmentForm appointmentForm) {
        appointmentService.saveAppointment(appointmentForm);
    }
}

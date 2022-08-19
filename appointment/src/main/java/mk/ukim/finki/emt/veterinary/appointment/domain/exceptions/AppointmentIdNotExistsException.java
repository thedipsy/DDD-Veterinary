package mk.ukim.finki.emt.veterinary.appointment.domain.exceptions;

public class AppointmentIdNotExistsException extends RuntimeException {

    public AppointmentIdNotExistsException() {
        super("Appointment does not exists.");
    }

}

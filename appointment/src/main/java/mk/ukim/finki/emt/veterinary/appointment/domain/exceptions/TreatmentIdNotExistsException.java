package mk.ukim.finki.emt.veterinary.appointment.domain.exceptions;

public class TreatmentIdNotExistsException extends RuntimeException {

    public TreatmentIdNotExistsException() {
        super("Treatment does not exists.");
    }

}

package mk.ukim.finki.emt.veterinary.patients.domain.exceptions;

public class OwnerNotExistsException extends RuntimeException {

    public OwnerNotExistsException() {
        super("Owner does not exists");
    }

}
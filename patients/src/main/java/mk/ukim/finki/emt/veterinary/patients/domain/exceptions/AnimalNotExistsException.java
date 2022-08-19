package mk.ukim.finki.emt.veterinary.patients.domain.exceptions;

public class AnimalNotExistsException extends RuntimeException {

    public AnimalNotExistsException() {
        super("Animal does not exists");
    }

}

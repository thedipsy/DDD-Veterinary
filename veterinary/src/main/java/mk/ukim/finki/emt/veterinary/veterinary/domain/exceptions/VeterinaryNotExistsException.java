package mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions;

public class VeterinaryNotExistsException extends RuntimeException {

    public VeterinaryNotExistsException() {
        super("Veterinary does not exists");
    }

}

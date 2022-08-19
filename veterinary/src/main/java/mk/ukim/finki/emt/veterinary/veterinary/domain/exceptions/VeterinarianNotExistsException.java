package mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions;

public class VeterinarianNotExistsException extends RuntimeException {

    public VeterinarianNotExistsException() {
        super("Veterinarian does not exists");
    }

}

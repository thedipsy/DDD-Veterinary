package mk.ukim.finki.emt.veterinary.appointment.domain.exceptions;

//TODO CHECK
public class DivisionWithZeroException extends RuntimeException {

    public DivisionWithZeroException(String division_with_zero) {
        super(division_with_zero);
    }

}

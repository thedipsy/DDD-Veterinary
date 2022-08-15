package mk.ukim.finki.emt.veterinary.patients.domain.exceptions;

public class DivisionWithZeroException extends RuntimeException {

    public DivisionWithZeroException(String division_with_zero) {
        super(division_with_zero);
    }

}

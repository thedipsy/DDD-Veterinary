package mk.ukim.finki.emt.veterinary.veterinary.services.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class VeterinarianForm {

    @NotNull
    private String name;
    @NotNull
    @NotNull
    private String surname;
    @NotNull
    private String email;
    @NotNull
    private String phone;
    @NotNull
    private Address address;
    @NotNull
    private Date dateOfEmployment;

}

package mk.ukim.finki.emt.veterinary.patients.services.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
public class OwnerForm {

    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String phone;
    @NotNull
    private String email;
    @NotNull
    private Address address;
    private List<AnimalForm> animalsList = new ArrayList<>();

}

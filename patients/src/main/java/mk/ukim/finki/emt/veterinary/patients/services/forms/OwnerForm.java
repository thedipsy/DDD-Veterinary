package mk.ukim.finki.emt.veterinary.patients.services.forms;

import com.sun.istack.NotNull;
import lombok.Data;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Animal;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

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
    private List<Animal> animalsList;

}

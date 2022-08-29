package mk.ukim.finki.emt.veterinary.veterinary.services.forms;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
public class VeterinaryForm {

    @NotNull
    private String name;
    @NotNull
    private Address address;
    private List<VeterinarianForm> veterinarians = new ArrayList<>();

}

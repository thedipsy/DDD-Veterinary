package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.Config.Constants;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Data
@Entity
@Table(name = "veterinary")
public class Veterinary extends AbstractEntity<VeterinaryId> {

    private String name;
    private Address address;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Veterinarian> veterinarians;

    public Veterinary(){
        super(VeterinaryId.randomId(VeterinaryId.class));
    }

    public static Veterinary build(String name, Address address) {
        Veterinary veterinary = new Veterinary();
        veterinary.name = name;
        veterinary.address = address;
        veterinary.veterinarians = new ArrayList<>();

        return veterinary;
    }

    public void addVeterinarian(String name, String surname, String email, String password, String phone, Address address, Date dateOfEmployment) {
        Veterinarian veterinarian = new Veterinarian(name, surname, email, password, phone, address, dateOfEmployment);
        veterinarians.add(veterinarian);
    }


    public void removeVeterinarian(VeterinarianId veterinarianId) {
        veterinarians.removeIf(v -> v.getId().equals(veterinarianId));
    }
}

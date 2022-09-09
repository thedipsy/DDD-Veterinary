package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import lombok.Data;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinarianNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;

import javax.persistence.*;
import java.util.*;

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

    public Optional<Veterinarian> getVeterinarian(VeterinarianId veterinarianId) {
        return veterinarians.stream().filter(v -> v.getId().equals(veterinarianId)).findFirst();
    }

    public void editVeterinarian(VeterinarianId veterinarianId, String name, String surname, String email, String phone, Address address, Date dateOfEmployment) {
        Veterinarian veterinarian = getVeterinarian(veterinarianId).orElseThrow(VeterinarianNotExistsException::new);
        veterinarian.setName(name);
        veterinarian.setSurname(surname);
        veterinarian.setUsername(email);
        veterinarian.setPhone(phone);
        veterinarian.setAddress(address);
        veterinarian.setDateOfEmployment(dateOfEmployment);

        removeVeterinarian(veterinarianId); //delete the old one
        veterinarians.add(veterinarian); //add the edited one
    }
}

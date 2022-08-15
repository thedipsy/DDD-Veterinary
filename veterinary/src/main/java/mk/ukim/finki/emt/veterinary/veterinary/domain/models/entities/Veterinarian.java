package mk.ukim.finki.emt.veterinary.veterinary.domain.models.entities;

import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.entities.id.VeterinarianId;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "veterinarian")
public class Veterinarian extends AbstractEntity<VeterinarianId> {

    private String name;
    private String surname;
    private String email;
    private String phone;
    private Address address;
    private Date dateOfEmployment;

}

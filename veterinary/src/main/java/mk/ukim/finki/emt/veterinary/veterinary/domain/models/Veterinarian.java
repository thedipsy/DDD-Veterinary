package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "veterinarian")
@Getter
public class Veterinarian extends AbstractEntity<VeterinarianId> {

    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;
    private Address address;
    private Date dateOfEmployment;

    public Veterinarian(){
        super(VeterinarianId.randomId(VeterinarianId.class));
    }

    public Veterinarian(String name, String surname, String email, String password, String phone, Address address, Date dateOfEmployment) {
        super(VeterinarianId.randomId(VeterinarianId.class));
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.dateOfEmployment = dateOfEmployment;
    }
}

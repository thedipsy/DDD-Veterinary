package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;

import javax.persistence.*;
import java.util.List;

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

}

package mk.ukim.finki.emt.veterinary.patients.domain.models;

import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "owner")
public class Owner extends AbstractEntity<OwnerId> {

    private String name;
    private String surname;
    private String phone;
    private String email;
    private Address address;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Animal> animalsList;

    public Owner(){
        super(OwnerId.randomId(OwnerId.class));
    }

}

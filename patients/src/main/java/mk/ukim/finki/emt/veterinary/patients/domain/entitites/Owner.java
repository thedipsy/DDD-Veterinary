package mk.ukim.finki.emt.veterinary.patients.domain.entitites;

import mk.ukim.finki.emt.veterinary.patients.domain.entitites.id.OwnerId;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "owner")
public class Owner extends AbstractEntity<OwnerId> {

    private String name;
    private String surname;
    private String phone;
    private String email;
    private Address address;

}

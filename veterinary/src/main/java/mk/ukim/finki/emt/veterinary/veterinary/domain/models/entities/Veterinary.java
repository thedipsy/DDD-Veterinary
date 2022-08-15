package mk.ukim.finki.emt.veterinary.veterinary.domain.models.entities;

import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.entities.id.VeterinaryId;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "veterinary")
public class Veterinary extends AbstractEntity<VeterinaryId> {

    private String name;
    private Address address;

}

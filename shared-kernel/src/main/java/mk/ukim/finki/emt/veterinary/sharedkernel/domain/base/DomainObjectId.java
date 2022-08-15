package mk.ukim.finki.emt.veterinary.sharedkernel.domain.base;

import lombok.Getter;

import javax.persistence.Embeddable;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
@Embeddable
@Getter
public class DomainObjectId implements Serializable {
    private String id;
}

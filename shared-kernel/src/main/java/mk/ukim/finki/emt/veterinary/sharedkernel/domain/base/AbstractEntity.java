package mk.ukim.finki.emt.veterinary.sharedkernel.domain.base;

import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class AbstractEntity<ID extends DomainObjectId>  {

    @EmbeddedId
    private ID id;

}

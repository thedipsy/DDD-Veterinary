package mk.ukim.finki.emt.veterinary.patients;

import mk.ukim.finki.emt.veterinary.patients.domain.exceptions.OwnerNotExistsException;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Owner;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.patients.services.IOwnerService;
import mk.ukim.finki.emt.veterinary.patients.services.forms.OwnerForm;
import mk.ukim.finki.emt.veterinary.patients.services.impl.OwnerService;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PatientsApplicationTests {

    @Autowired
    private IOwnerService orderService;

    @Test
    void contextLoads() {
    }

    @Test
    public void testBuildOwner(){
        OwnerForm ownerForm = new OwnerForm();
        ownerForm.setName("Angela");
        ownerForm.setSurname("Milosheska");
        ownerForm.setPhone("38976999298");
        ownerForm.setAddress(Address.build("9ti maj", "36", "Skopje", "7500"));
        ownerForm.setEmail("milosheskaa@gmail.com");

        OwnerId ownerId = orderService.saveOwner(ownerForm);
        Owner owner = orderService.findById(ownerId);
        System.out.println("succeeded");
    }

}

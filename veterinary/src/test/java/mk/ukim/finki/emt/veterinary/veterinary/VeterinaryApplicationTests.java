package mk.ukim.finki.emt.veterinary.veterinary;

import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinaryNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.services.IVeterinaryService;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class VeterinaryApplicationTests {

    @Autowired
    private IVeterinaryService veterinaryService;

    @Test
    void contextLoads() {
    }

    @Test
    public void testBuildOwner(){
        VeterinaryForm veterinaryForm = new VeterinaryForm();
        veterinaryForm.setName("Angela");
        veterinaryForm.setAddress(Address.build("9ti maj", "36", "Skopje", "7500"));

        VeterinaryId veterinaryId = veterinaryService.saveVeterinary(veterinaryForm);
        Veterinary veterinary = veterinaryService.findById(veterinaryId).orElseThrow(VeterinaryNotExistsException::new);
        System.out.println("succeeded");
    }

}

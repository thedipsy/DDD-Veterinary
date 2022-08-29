package mk.ukim.finki.emt.veterinary.appointment;

import mk.ukim.finki.emt.veterinary.appointment.domain.exceptions.AppointmentIdNotExistsException;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.Appointment;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.AppointmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.*;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.enumeration.AnimalSpecie;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.enumeration.Gender;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper.*;
import mk.ukim.finki.emt.veterinary.appointment.service.IAppointmentService;
import mk.ukim.finki.emt.veterinary.appointment.service.forms.AppointmentForm;
import mk.ukim.finki.emt.veterinary.appointment.xport.client.VeterinaryClient;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class AppointmentApplicationTests {

    @Autowired
    private IAppointmentService appointmentService;

    @Autowired
    private VeterinaryClient veterinaryClient;

    @Test
    void contextLoads() {
    }

    private static Patient newPatient(String name, Date birthDate, AnimalSpecie animalSpecie, String breed, Microchip microchip, Weight weight, Gender gender) {
        Patient p = new Patient(PatientId.randomId(PatientId.class), name, birthDate, animalSpecie, breed, microchip, weight, gender);
        return p;
    }

    private static Veterinarian newVeterinarian(String name, String surname, String email, String phone, Address address, Date dateOfEmployment) {
        Veterinarian p = new Veterinarian(VeterinarianId.randomId(VeterinarianId.class), name, surname, email, phone, address, dateOfEmployment);
        return p;
    }

    @Test
    public void testBuildOwner(){
        AppointmentForm appointmentForm = new AppointmentForm();
        appointmentForm.setDate(new Date());
        appointmentForm.setPatient(newPatient(
                "Mande",
                new Date(),
                AnimalSpecie.CAT,
                "Angor",
                new Microchip(),
                new Weight(),
                Gender.FEMALE
        ));
        appointmentForm.setVeterinarian(newVeterinarian(
                "Bojan",
                "Taleski",
                "bojankiko5@gmail.com",
                "38975708272",
                Address.build("9ti maj", "36", "Skopje", "7500"),
                new Date()
        ));

        AppointmentId appointmentId = appointmentService.saveAppointment(appointmentForm);
        Appointment appointment = appointmentService.findById(appointmentId).orElseThrow(AppointmentIdNotExistsException::new);
        System.out.println("succeeded");
    }

    @Test
    public void testAppointmentRealData(){
        List<Veterinary> veterinaries = veterinaryClient.findAll();
        System.out.println(veterinaries);
    }

}

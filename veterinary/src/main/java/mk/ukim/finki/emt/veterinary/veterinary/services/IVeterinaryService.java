package mk.ukim.finki.emt.veterinary.veterinary.services;

import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinarianNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinaryNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinarianForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IVeterinaryService extends UserDetailsService {

    List<Veterinary> findAll();
    Veterinary findById(VeterinaryId veterinaryId);
    void addVeterinarian(VeterinaryId veterinaryId, VeterinarianForm veterinarianForm) throws VeterinaryNotExistsException;

    Veterinarian findVeterinarianById(VeterinaryId veterinaryId, VeterinarianId veterinarianId);

    void deleteVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId) throws VeterinaryNotExistsException, VeterinarianNotExistsException;
    VeterinaryId saveVeterinary(VeterinaryForm veterinaryForm);
    void deleteVeterinary(VeterinaryId VeterinaryId) throws VeterinaryNotExistsException;
    VeterinaryId editVeterinary(VeterinaryId veterinaryId, VeterinaryForm veterinaryForm) throws  VeterinaryNotExistsException;

    void editVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId1, VeterinarianForm veterinarianForm);

    Veterinarian findVeterinarianById(VeterinarianId veterinarianId1);
}

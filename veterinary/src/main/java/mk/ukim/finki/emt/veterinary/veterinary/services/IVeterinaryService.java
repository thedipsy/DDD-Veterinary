package mk.ukim.finki.emt.veterinary.veterinary.services;

import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinarianNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinaryNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinarianForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;

import java.util.List;
import java.util.Optional;

public interface IVeterinaryService {

    List<Veterinary> findAll();
    Optional<Veterinary> findById(VeterinaryId veterinaryId);
    void addVeterinarian(VeterinaryId veterinaryId, VeterinarianForm veterinarianForm) throws VeterinaryNotExistsException;
    void deleteVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId) throws VeterinaryNotExistsException, VeterinarianNotExistsException;
    VeterinaryId saveVeterinary(VeterinaryForm veterinaryForm);
    void deleteVeterinary(VeterinaryId VeterinaryId) throws  VeterinaryNotExistsException;

}

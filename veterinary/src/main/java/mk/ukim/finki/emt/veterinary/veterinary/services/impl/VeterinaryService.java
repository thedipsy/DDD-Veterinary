package mk.ukim.finki.emt.veterinary.veterinary.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinarianNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinaryNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.repository.VeterinaryRepository;
import mk.ukim.finki.emt.veterinary.veterinary.services.IVeterinaryService;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinarianForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
@AllArgsConstructor
public class VeterinaryService implements IVeterinaryService {

    private final VeterinaryRepository veterinaryRepository;
    private final Validator validator;

    @Override
    public List<Veterinary> findAll() {
        return veterinaryRepository.findAll();
    }

    @Override
    public Veterinary findById(VeterinaryId veterinaryId) {
        return veterinaryRepository.findById(veterinaryId).orElseThrow(VeterinarianNotExistsException::new);
    }

    @Override
    public VeterinaryId saveVeterinary(VeterinaryForm veterinaryForm) {
        Objects.requireNonNull(veterinaryForm, "Veterinary must not be null");
        var constraintViolations = validator.validate(veterinaryForm);
        if(constraintViolations.size() > 0){
            throw new ConstraintViolationException("The veterinary form is not valid", constraintViolations);
        }

        var veterinaryToSave = toDomainObject(veterinaryForm);
        var newVeterinary = veterinaryRepository.saveAndFlush(veterinaryToSave);
        return newVeterinary.getId();
    }


    @Override
    public VeterinaryId editVeterinary(VeterinaryId veterinaryId, VeterinaryForm veterinaryForm) {
        Veterinary veterinary = findById(veterinaryId);
        Objects.requireNonNull(veterinaryForm, "Veterinary must not be null");
        var constraintViolations = validator.validate(veterinaryForm);
        if(constraintViolations.size() > 0){
            throw new ConstraintViolationException("The veterinary form is not valid", constraintViolations);
        }

        var veterinaryToSave = toDomainObject(veterinaryForm);
        veterinary.setName(veterinaryToSave.getName());
        veterinary.setAddress(veterinaryToSave.getAddress());
        veterinary.setVeterinarians(veterinaryToSave.getVeterinarians());

        var savedVeterinary = veterinaryRepository.saveAndFlush(veterinary);
        return savedVeterinary.getId();
    }

    private Veterinary toDomainObject(VeterinaryForm veterinaryForm){
        var veterinary = Veterinary.build(veterinaryForm.getName(), veterinaryForm.getAddress());

        veterinaryForm.getVeterinarians()
                .forEach(veterinarian -> veterinary.addVeterinarian(
                        veterinarian.getName(),
                        veterinarian.getSurname(),
                        veterinarian.getEmail(),
                        veterinarian.getPhone(),
                        veterinarian.getAddress(),
                        veterinarian.getDateOfEmployment()
                ));

        return veterinary;
    }

    @Override
    public void deleteVeterinary(VeterinaryId veterinaryId) throws VeterinaryNotExistsException {
        if(findById(veterinaryId) != null) {
            veterinaryRepository.deleteById(veterinaryId);
        } else{
            throw new VeterinaryNotExistsException();
        }
    }

    @Override
    public void addVeterinarian(VeterinaryId veterinaryId, VeterinarianForm veterinarianForm) throws VeterinaryNotExistsException {
        Veterinary veterinary = findById(veterinaryId);
        veterinary.addVeterinarian(
                veterinarianForm.getName(),
                veterinarianForm.getSurname(),
                veterinarianForm.getEmail(),
                veterinarianForm.getPhone(),
                veterinarianForm.getAddress(),
                veterinarianForm.getDateOfEmployment()
        );

        veterinaryRepository.saveAndFlush(veterinary);
    }

    @Override
    public void deleteVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId) throws VeterinaryNotExistsException, VeterinarianNotExistsException {
        Veterinary veterinary = findById(veterinaryId);
        veterinary.removeVeterinarian(veterinarianId);

        veterinaryRepository.saveAndFlush(veterinary);
    }

}

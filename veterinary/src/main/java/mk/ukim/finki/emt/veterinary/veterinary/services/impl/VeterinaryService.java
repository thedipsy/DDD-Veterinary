package mk.ukim.finki.emt.veterinary.veterinary.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.Config.Constants;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinarianNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.VeterinaryNotExistsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import mk.ukim.finki.emt.veterinary.veterinary.domain.repository.VeterinaryRepository;
import mk.ukim.finki.emt.veterinary.veterinary.services.IVeterinaryService;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinarianForm;
import mk.ukim.finki.emt.veterinary.veterinary.services.forms.VeterinaryForm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.List;
import java.util.Objects;
import java.util.Random;


@Service
@Transactional
@AllArgsConstructor
public class VeterinaryService implements IVeterinaryService {

    private final VeterinaryRepository veterinaryRepository;
    private final Validator validator;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

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

        veterinary.setName(veterinaryForm.getName());
        veterinary.setAddress(veterinaryForm.getAddress());

        var savedVeterinary = veterinaryRepository.saveAndFlush(veterinary);
        return savedVeterinary.getId();
    }

    private Veterinary toDomainObject(VeterinaryForm veterinaryForm){
        return Veterinary.build(veterinaryForm.getName(), veterinaryForm.getAddress());
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
        //generate password
        String generatedPassword = generatePassword();
        String encodedPassword = passwordEncoder.encode(generatedPassword);

        veterinary.addVeterinarian(
                veterinarianForm.getName(),
                veterinarianForm.getSurname(),
                veterinarianForm.getEmail(),
                encodedPassword,
                veterinarianForm.getPhone(),
                veterinarianForm.getAddress(),
                veterinarianForm.getDateOfEmployment()
        );

        veterinaryRepository.saveAndFlush(veterinary);
        emailService.sendEmail(veterinarianForm.getEmail(), "Welcome To Our Web App", "Your auto-generated password is: " + generatedPassword);
    }

    @Override
    public void editVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId, VeterinarianForm veterinarianForm) {
        Veterinary veterinary = findById(veterinaryId);

        veterinary.editVeterinarian(
                veterinarianId,
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
    public Veterinarian findVeterinarianById(VeterinaryId veterinaryId, VeterinarianId veterinarianId) {
        Veterinary veterinary = findById(veterinaryId);
        return veterinary.getVeterinarian(veterinarianId).orElseThrow(VeterinarianNotExistsException::new);
    }

    /**
     * Returns a 10 characters random generated password containing 0-9, a-z, A-Z
     */
    public static String generatePassword() {
        String alphaNumeric = Constants.ALPHA_NUMERIC;
        Random random = new Random();

        StringBuilder sb = new StringBuilder(10);
        for (int i = 0; i < 10; i++) {
            sb.append(alphaNumeric.charAt(random.nextInt(alphaNumeric.length())));
        }
        return sb.toString();
    }

    @Override
    public void deleteVeterinarian(VeterinaryId veterinaryId, VeterinarianId veterinarianId) throws VeterinaryNotExistsException, VeterinarianNotExistsException {
        Veterinary veterinary = findById(veterinaryId);
        veterinary.removeVeterinarian(veterinarianId);

        veterinaryRepository.saveAndFlush(veterinary);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<Veterinary> veterinaryList = findAll();
        for(Veterinary veterinary : veterinaryList){
            for(Veterinarian veterinarian : veterinary.getVeterinarians()){
                if(veterinarian.getUsername().equals(username)){
                    return veterinarian;
                }
            }
        }
        throw new UsernameNotFoundException(username);
    }
}

package mk.ukim.finki.emt.veterinary.appointment.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.appointment.domain.exceptions.AppointmentIdNotExistsException;
import mk.ukim.finki.emt.veterinary.appointment.domain.exceptions.TreatmentIdNotExistsException;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.Appointment;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.AppointmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.models.id.TreatmentId;
import mk.ukim.finki.emt.veterinary.appointment.domain.repository.AppointmentRepository;
import mk.ukim.finki.emt.veterinary.appointment.service.IAppointmentService;
import mk.ukim.finki.emt.veterinary.appointment.service.forms.AppointmentForm;
import mk.ukim.finki.emt.veterinary.appointment.service.forms.TreatmentForm;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class AppointmentService implements IAppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final Validator validator;

    @Override
    public List<Appointment> findAll() {
        return appointmentRepository.findAll();
    }

    @Override
    public Optional<Appointment> findById(AppointmentId appointmentId) {
        return appointmentRepository.findById(appointmentId);
    }

    @Override
    public void addItem(AppointmentId appointmentId, TreatmentForm treatmentForm) throws AppointmentIdNotExistsException {
        Appointment appointment = findById(appointmentId).orElseThrow(AppointmentIdNotExistsException::new);
        appointment.addTreatment(
                treatmentForm.getTreatmentType(),
                treatmentForm.getDescription(),
                treatmentForm.getDosage()
        );

        appointmentRepository.saveAndFlush(appointment);
    }

    @Override
    public void deleteItem(AppointmentId appointmentId, TreatmentId treatmentId) throws AppointmentIdNotExistsException, TreatmentIdNotExistsException {
        Appointment appointment = findById(appointmentId).orElseThrow(AppointmentIdNotExistsException::new);
        appointment.removeTreatment(treatmentId);

        appointmentRepository.saveAndFlush(appointment);
    }


    //TODO CHECK THIS
    @Override
    public AppointmentId saveAppointment(AppointmentForm appointmentForm){
        Objects.requireNonNull(appointmentForm, "Appointment must not be null");
        var constraintViolations = validator.validate(appointmentForm);
        if (constraintViolations.size() > 0){
            throw new ConstraintViolationException("The appointment form is not valid", constraintViolations);
        }

        var appointmentToSave = toDomainObject(appointmentForm);
        var newAppointment = appointmentRepository.saveAndFlush(appointmentToSave);
        return newAppointment.getId();
    }

    private Appointment toDomainObject(AppointmentForm appointmentForm){
        var appointment = new Appointment(appointmentForm.getDate(), appointmentForm.getPatientId(), appointmentForm.getVeterinarianId());
        appointmentForm.getTreatmentList()
                .forEach(treatment -> appointment.addTreatment(
                        treatment.getTreatmentType(),
                        treatment.getDescription(),
                        treatment.getDosage()
                ));

        return appointment;
    }

}

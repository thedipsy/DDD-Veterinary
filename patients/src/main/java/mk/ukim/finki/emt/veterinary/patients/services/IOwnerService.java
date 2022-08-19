package mk.ukim.finki.emt.veterinary.patients.services;

import mk.ukim.finki.emt.veterinary.patients.domain.exceptions.AnimalNotExistsException;
import mk.ukim.finki.emt.veterinary.patients.domain.exceptions.OwnerNotExistsException;
import mk.ukim.finki.emt.veterinary.patients.domain.models.Owner;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.AnimalId;
import mk.ukim.finki.emt.veterinary.patients.domain.models.id.OwnerId;
import mk.ukim.finki.emt.veterinary.patients.services.forms.AnimalForm;
import mk.ukim.finki.emt.veterinary.patients.services.forms.OwnerForm;

import java.util.List;
import java.util.Optional;

public interface IOwnerService {

    List<Owner> findAll();
    Optional<Owner> findById(OwnerId ownerId);
    void addAnimal(OwnerId ownerId, AnimalForm animalForm) throws OwnerNotExistsException;
    void deleteAnimal(OwnerId ownerId, AnimalId animalId) throws OwnerNotExistsException, AnimalNotExistsException;
    OwnerId saveOwner(OwnerForm ownerForm);
    void deleteOwner(OwnerId ownerId) throws  OwnerNotExistsException;

}

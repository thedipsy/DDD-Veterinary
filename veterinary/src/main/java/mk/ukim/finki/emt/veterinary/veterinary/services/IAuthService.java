package mk.ukim.finki.emt.veterinary.veterinary.services;

import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;

public interface IAuthService {

    Veterinarian login(String email, String password);
}

package mk.ukim.finki.emt.veterinary.veterinary.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.InvalidArgumentsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.exceptions.InvalidUserCredentialsException;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.services.IAuthService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthService implements IAuthService {
    private final VeterinaryService veterinaryService;

    @Override
    public Veterinarian login(String username, String password) {
        if (username==null || username.isEmpty() || password==null || password.isEmpty()) {
            throw new InvalidArgumentsException();
        }

        List<Veterinary> veterinaryList = veterinaryService.findAll();
        for(Veterinary veterinary : veterinaryList){
            for(Veterinarian veterinarian : veterinary.getVeterinarians()){
                if(veterinarian.getUsername().equals(username) && veterinarian.getPassword().equals(password)){
                    return veterinarian;
                }
            }
        }
        throw new InvalidUserCredentialsException();

//        return userRepository.findByUsernameAndPassword(username,
//                password).orElseThrow(InvalidUserCredentialsException::new);


    }

}

package mk.ukim.finki.emt.veterinary.veterinary.domain.dto;


import lombok.Data;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Role;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;

@Data
public class UserDetailsDto {
    private String username;
    private Role role;

    public static UserDetailsDto of(Veterinarian veterinarian) {
        UserDetailsDto details = new UserDetailsDto();
        details.username = veterinarian.getUsername();
        details.role = veterinarian.getRole();
        return details;
    }
}


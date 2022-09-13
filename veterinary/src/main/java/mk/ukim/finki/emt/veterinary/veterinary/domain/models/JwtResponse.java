package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import lombok.Getter;

@Getter
public class JwtResponse {
    private String veterinarianId;
   private String jwtToken;
   private Role role;

    public JwtResponse(String veterinarianId, String jwtToken, Role role) {
        this.veterinarianId = veterinarianId;
        this.jwtToken = jwtToken;
        this.role = role;
    }
}

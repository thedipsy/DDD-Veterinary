package mk.ukim.finki.emt.veterinary.veterinary.domain.models;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.valueobjects.Address;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinarianId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;

@Entity
@Table(name = "veterinarian")
@Getter
public class Veterinarian extends AbstractEntity<VeterinarianId> implements UserDetails {

    private String name;
    private String surname;
    private String username;
    private String password;
    private String phone;
    private Address address;
    private Date dateOfEmployment;

    private boolean isAccountNonExpired = true;
    private boolean isAccountNonLocked = true;
    private boolean isCredentialsNonExpired = true;
    private boolean isEnabled = true;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    public Veterinarian(){
        super(VeterinarianId.randomId(VeterinarianId.class));
    }

    public Veterinarian(String name, String surname, String email, String password, String phone, Address address, Date dateOfEmployment) {
        super(VeterinarianId.randomId(VeterinarianId.class));
        this.name = name;
        this.surname = surname;
        this.username = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.dateOfEmployment = dateOfEmployment;
        this.role = Role.ROLE_USER;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(role);
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

}

package mk.ukim.finki.emt.veterinary.veterinary.domain.repository;

import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinarian;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.Veterinary;
import mk.ukim.finki.emt.veterinary.veterinary.domain.models.id.VeterinaryId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VeterinaryRepository extends JpaRepository<Veterinary, VeterinaryId> {
}

package ro.raresc4.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.raresc4.userservice.model.User;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findUserById(UUID id);
    boolean existsUserByUsername(String username);
    boolean existsUserByEmail(String email);
}

package ro.raresc4.userservice.service;

import exceptions.ConflictException;
import exceptions.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ro.raresc4.userservice.model.User;
import ro.raresc4.userservice.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findUserById(UUID.fromString(id))
                .orElseThrow(() -> new NotFoundException("User with not found"));
    }

    public User createUser(User user) {
        if (userRepository.existsUserByUsername(user.getUsername())) throw new ConflictException("Username already exists");
        if (userRepository.existsUserByEmail(user.getEmail())) throw new ConflictException("Email already exists");

        return userRepository.save(user);
    }
}

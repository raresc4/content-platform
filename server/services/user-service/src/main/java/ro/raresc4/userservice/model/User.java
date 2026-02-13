package ro.raresc4.userservice.model;

import enums.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;
    private String firstName;
    private String lastName;

    @Builder.Default
    private Instant joinDate = Instant.now();

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Builder.Default
    private boolean active = true;
}

package ro.raresc4.userservice.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String id;

    @NotNull
    @NotBlank
    private String username;

    @NotNull
    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    private String firstName;

    @NotNull
    @NotBlank
    private String lastName;

    private String joinDate;

    @NotNull
    @NotBlank
    private String role;

    private boolean active;
}

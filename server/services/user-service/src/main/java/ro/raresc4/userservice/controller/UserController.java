package ro.raresc4.userservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.raresc4.userservice.dto.UserDto;
import ro.raresc4.userservice.mapper.UserMapper;
import ro.raresc4.userservice.model.User;
import ro.raresc4.userservice.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserMapper userMapper;
    private final UserService userService;

    @GetMapping
    private ResponseEntity<List<UserDto>> getAllUsers() {
        List<User> users = userService.getAllUsers();

        return users.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(users.stream().map(userMapper::toDto).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(userMapper.toDto(userService.getUserById(id)));
    }

    @PostMapping
    private ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(userMapper.toDto(userService.createUser(userMapper.toEntity(userDto))));
    }
}

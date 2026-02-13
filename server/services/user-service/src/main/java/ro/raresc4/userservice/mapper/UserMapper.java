package ro.raresc4.userservice.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import ro.raresc4.userservice.dto.UserDto;
import ro.raresc4.userservice.model.User;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "joinDate", ignore = true)
    User toEntity(UserDto userDto);

    UserDto toDto(User user);
}

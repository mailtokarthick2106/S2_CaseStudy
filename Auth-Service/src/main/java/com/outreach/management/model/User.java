package com.outreach.management.model;

import java.util.Set;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.outreach.management.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Users")
public class User {

	@Id ObjectId databaseId;
    private long id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Set<Role> roles;

    public UserDto toUserDto(){
        UserDto userDto = new UserDto();
        userDto.setId(this.id);
        userDto.setEmail(this.email);
        userDto.setFirstName(this.firstName);
        userDto.setLastName(this.lastName);
        userDto.setUsername(this.username);
        userDto.setRoles(this.roles.stream().map(roles -> roles.getName().toString()).collect(Collectors.toList()));
        return userDto;
    }
}

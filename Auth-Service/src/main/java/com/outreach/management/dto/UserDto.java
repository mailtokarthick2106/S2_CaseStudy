package com.outreach.management.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"firstName","lastName","username"})
public class UserDto {

	
    private long id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private List<String> roles;

  }

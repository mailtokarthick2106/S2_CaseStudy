package com.outreach.management.service;

import java.util.List;

import com.outreach.management.dto.UserDto;
import com.outreach.management.model.User;

public interface UserService {

    UserDto save(UserDto user);
    List<UserDto> findAll();
    User findOne(long id);
    void delete(long id);
}

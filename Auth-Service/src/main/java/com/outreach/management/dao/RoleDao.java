package com.outreach.management.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.outreach.management.model.Role;

@Repository
public interface RoleDao extends MongoRepository<Role, Long> {

    //@Query(value = "SELECT * FROM Roles where name IN (:roles)", nativeQuery = true)
    //Set<Role> find(@Param("roles") List<String> roles);
    
    @Query("{'name' : ?0 }")
    Set<Role> findRolesByName(List<String> roles);
}

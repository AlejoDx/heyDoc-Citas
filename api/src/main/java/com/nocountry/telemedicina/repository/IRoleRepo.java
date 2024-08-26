package com.nocountry.telemedicina.repository;

import com.nocountry.telemedicina.models.Role;
import com.nocountry.telemedicina.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface IRoleRepo extends IGenericRepo<Role, Long> {
    @Query(value = "SELECT * FROM roles r WHERE r.name_role=:roleName",nativeQuery = true)
    Role findRoleByroleName(@Param("roleName")String roleName);
}

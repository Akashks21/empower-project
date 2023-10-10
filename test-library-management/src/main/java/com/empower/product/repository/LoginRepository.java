package com.empower.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empower.product.entity.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login, String> {

}

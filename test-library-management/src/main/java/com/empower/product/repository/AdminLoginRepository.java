package com.empower.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empower.product.entity.AdminLogin;
@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin, String> {

}

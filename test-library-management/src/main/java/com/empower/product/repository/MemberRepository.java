package com.empower.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empower.product.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
	
	List<Member> findByUsername(String username);

}

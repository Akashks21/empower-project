package com.empower.product.service;

import java.util.List;

import com.empower.product.entity.AdminLogin;
import com.empower.product.entity.Login;
import com.empower.product.entity.Member;
import com.empower.product.entity.MemberCode;

public interface MemberService {

	MemberCode addMember(Member member);
       
	MemberCode getLoginDetails(Login l);

    List<Member> getAllMembers();

    MemberCode getAdminLoginDetails(AdminLogin l);

    List<Member> getMemberForLogin(String username);
}

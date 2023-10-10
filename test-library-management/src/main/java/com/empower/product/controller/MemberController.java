package com.empower.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empower.product.entity.AdminLogin;
import com.empower.product.entity.Login;
import com.empower.product.entity.Member;
import com.empower.product.entity.MemberCode;
import com.empower.product.service.MemberService;


@CrossOrigin("*")
@RequestMapping("/member")
@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	@GetMapping("/getmember")
	public ResponseEntity<List<Member>> getAllMember(){
		ResponseEntity<List<Member>> re = null;
		List<Member> members = memberService.getAllMembers();
		if(members.isEmpty()) {
			System.out.println("Book Not Found");
			re = new ResponseEntity<List<Member>>(members,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<List<Member>>(members,HttpStatus.OK);
		}
		return re;
	}
	
	@PostMapping("/addmember")
	public ResponseEntity<String> addMember(@RequestBody Member member) {
		// TODO Auto-generated method stub
		ResponseEntity<String> re = null;
		System.out.println("Object from HTTP: "+ member);
		MemberCode memberCode = memberService.addMember(member);
		if(memberCode.getStatus() == 0) {
			re = new ResponseEntity<String>("Failure",HttpStatus.NOT_FOUND);
		}else {
			re = new ResponseEntity<String>("Success",HttpStatus.OK);
		}
		return re;
	}
	
	@PostMapping("/login")
	public ResponseEntity<Login> getLoginDetails(@RequestBody Login l) {
		
		
		System.out.println("getbook controller function got input as " + l);
		ResponseEntity<Login> re=null;
		MemberCode x = memberService.getLoginDetails(l);
		if(x.getStatus()== 0)
				re =new ResponseEntity<Login>(l,HttpStatus.NOT_FOUND);
		else
			re =new ResponseEntity<Login>(l,HttpStatus.OK);
		return re;
		
		
		
	}
	


	@PostMapping("/adminlogin")
	public ResponseEntity<AdminLogin> getAdminLoginDetails(@RequestBody AdminLogin l) {
		
		
		System.out.println("getbook controller function got input as " + l);
		ResponseEntity<AdminLogin> re=null;
		MemberCode x = memberService.getAdminLoginDetails(l);
		if(x.getStatus()== 0)
				re =new ResponseEntity<AdminLogin>(l,HttpStatus.NOT_FOUND);
		else
			re =new ResponseEntity<AdminLogin>(l,HttpStatus.OK);
		return re;
		
		
		
	}

	@GetMapping("/getmemberbyusername/{username}")
	public ResponseEntity<List<Member>> getMemberByUsername(@PathVariable String username){
		ResponseEntity<List<Member>> re = null;
		List<Member> member = memberService.getMemberForLogin(username);
		if(member.isEmpty()) {
			re = new ResponseEntity<List<Member>>(member,HttpStatus.NOT_FOUND);
		}
		else {
			re = new ResponseEntity<List<Member>>(member,HttpStatus.OK);
		}
		return re;
		
	}
}

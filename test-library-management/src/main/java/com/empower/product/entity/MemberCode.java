package com.empower.product.entity;

public class MemberCode {
	
	private int status;
	private String message;
	Member member;
	Login login;
	AdminLogin adminLogin;
	
	public MemberCode(int status, AdminLogin adminLogin, String message) {
		super();
		this.status = status;
		this.message = message;
		this.adminLogin = adminLogin;
	}
	public AdminLogin getAdminLogin() {
		return adminLogin;
	}
	public void setAdminLogin(AdminLogin adminLogin) {
		this.adminLogin = adminLogin;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Member getMember() {
		return member;
	}
	public void setMember(Member member) {
		this.member = member;
	}
	public MemberCode(int status, String message, Member member) {
		super();
		this.status = status;
		this.message = message;
		this.member = member;
	}
	
	public MemberCode(Login login,int status, String message ) {
		super();
		this.status = status;
		this.message = message;
		this.login = login;
	}
	public MemberCode() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}

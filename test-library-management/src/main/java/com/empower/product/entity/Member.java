package com.empower.product.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int memberId;
	private String firstName;
	private String lastName;
	private String email;
	private String contact;
	private String username;
	private String password;
	
	
	
	
	@Override
	public String toString() {
		return "Member [id=" + memberId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", contact=" + contact + ", username=" + username + ", password=" + password + "]";
	}
	public Member() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int id) {
		this.memberId = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Member(int memberId, String firstName, String lastName, String email, String contact, String username,
			String password) {
		super();
		this.memberId = memberId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contact = contact;
		this.username = username;
		this.password = password;
		
	}
	
	
	

}

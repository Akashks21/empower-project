package com.empower.product.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class IssueBook {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int issueBookId;
	
	private int bookId;
	private String memberUsername;
	
	
	
	@Temporal(TemporalType.DATE) @DateTimeFormat(pattern = "YYYY-MM-DD")
	private Date issueDate;
	@Temporal(TemporalType.DATE) @DateTimeFormat(pattern = "YYYY-MM-DD")
	private Date returnDate;
	
	
	
	
	public int getIssueBookId() {
		return issueBookId;
	}
	public void setIssueBookId(int issueBookId) {
		this.issueBookId = issueBookId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	
	public Date getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}
	public Date getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}
	public IssueBook() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "IssueBook [issueBookId=" + issueBookId + ", bookId=" + bookId + ", memberUsername=" + memberUsername + ", issueDate="
				+ issueDate + ", returnDate=" + returnDate + "]";
	}

	public IssueBook(int bookId, String memberUsername) {
		super();
		this.bookId = bookId;
		this.memberUsername = memberUsername;
	}
	public String getMemberUsername() {
		return memberUsername;
	}
	public void setMemberUsername(String memberUsername) {
		this.memberUsername = memberUsername;
	}
	
	

}

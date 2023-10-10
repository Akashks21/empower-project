package com.empower.product.entity;

public class IssueBookStatus {
	private IssueBook issueBook;
	private String statusMessage;
	private int statusCode;
	public IssueBook getIssueBook() {
		return issueBook;
	}
	public void setIssueBook(IssueBook issueBook) {
		this.issueBook = issueBook;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public IssueBookStatus(IssueBook issueBook, String statusMessage, int statusCode) {
		super();
		this.issueBook = issueBook;
		this.statusMessage = statusMessage;
		this.statusCode = statusCode;
	}
	@Override
	public String toString() {
		return "IssueBookStatus [issueBook=" + issueBook + ", statusMessage=" + statusMessage + ", statusCode="
				+ statusCode + "]";
	}
	

}

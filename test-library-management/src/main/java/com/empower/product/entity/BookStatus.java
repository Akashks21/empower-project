package com.empower.product.entity;

public class BookStatus {
	
	private int bookStatus;
	private String message;
	private Book book;
	public BookStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookStatus(int bookStatus, String message, Book book) {
		super();
		this.bookStatus = bookStatus;
		this.message = message;
		this.book = book;
	}
	public int getBookStatus() {
		return bookStatus;
	}
	public void setBookStatus(int bookStatus) {
		this.bookStatus = bookStatus;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}

}

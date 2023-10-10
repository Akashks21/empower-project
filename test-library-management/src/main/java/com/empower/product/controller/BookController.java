package com.empower.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empower.product.entity.Book;
import com.empower.product.entity.BookStatus;
import com.empower.product.service.BookService;
@CrossOrigin("*")
@RestController
@RequestMapping("/book")

public class BookController {

	@Autowired
	private BookService bookService;
	
	//Controller function For adding the book in the table
	
	@PostMapping("/addbook")
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		ResponseEntity<Book> re = null;
		BookStatus bookStatus = bookService.addBook(book);
		if(bookStatus.getBookStatus() == 0) {
			re = new ResponseEntity<Book>(book, HttpStatus.NOT_FOUND);
		}else {
			re = new ResponseEntity<Book>(book, HttpStatus.OK);
		}
		
		return re;
	}
	
	//Controller function for updating the book
	
	@PostMapping("/updatebook")
	public ResponseEntity<Book> updateBook(@RequestBody Book book){
		ResponseEntity<Book> re = null;
		BookStatus bookStatus = bookService.updateBook(book);
		if(bookStatus.getBookStatus() == 0) {
			re = new ResponseEntity<Book>(book, HttpStatus.NOT_FOUND);
		}else {
			re = new ResponseEntity<Book>(book, HttpStatus.OK);
		}
		
		return re;
	}
	
	
	
	@GetMapping("/getbooks")
	public ResponseEntity<List<Book>> getAllBooks(){
		ResponseEntity<List<Book>> re = null;
		List<Book> books = bookService.getAllBooks();
		if(books.isEmpty()) {
			System.out.println("Book Not Found");
			re = new ResponseEntity<List<Book>>(books,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<List<Book>>(books,HttpStatus.OK);
		}
		return re;
	}
	
	@GetMapping("/getbookbyid/{bookid}")
	public ResponseEntity<BookStatus> getBookById(@PathVariable int bookid){
		ResponseEntity<BookStatus> re = null;
		BookStatus bookStatus = bookService.getBookById(bookid);
		if(bookStatus.getBookStatus()==0) {
			re = new ResponseEntity<BookStatus>(bookStatus,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<BookStatus>(bookStatus,HttpStatus.OK);
		}
		return re;
		
	}
	
	@DeleteMapping ("/deletebook/{bookid}")
	public ResponseEntity<BookStatus> deletebook(@PathVariable int bookid){
		ResponseEntity<BookStatus> re = null;
		BookStatus bookStatus = bookService.deleteBook(bookid);
		if(bookStatus.getBookStatus()==0) {
			re = new ResponseEntity<BookStatus>(bookStatus,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<BookStatus>(bookStatus,HttpStatus.OK);
		}
		return re;
		
	}
	
	@GetMapping("/getcategory/{category}")
	public ResponseEntity<List<Book>> getBooksByCategory(@PathVariable String category){
		ResponseEntity<List<Book>> re = null;
		List<Book> books = bookService.getBooksByCategory(category);
		if(books.isEmpty()) {
			re = new ResponseEntity<List<Book>>(books,HttpStatus.NOT_FOUND);
		}
		else {
			re = new ResponseEntity<List<Book>>(books,HttpStatus.OK);
		}
		return re;
	}
	@GetMapping("/getbyauthor/{author}")
	public ResponseEntity<List<Book>> getBooksByAuthor(@PathVariable String author){
		ResponseEntity<List<Book>> re = null;
		List<Book> books = bookService.getBooksByAuthor(author);
		if(books.isEmpty()) {
			re = new ResponseEntity<List<Book>>(books,HttpStatus.NOT_FOUND);
		}
		else {
			re = new ResponseEntity<List<Book>>(books,HttpStatus.OK);
		}
		return re;
	}
	
}

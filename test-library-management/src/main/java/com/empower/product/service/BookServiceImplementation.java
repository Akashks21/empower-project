package com.empower.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empower.product.entity.Book;
import com.empower.product.entity.BookStatus;
import com.empower.product.repository.BookRepository;
@Service
public class BookServiceImplementation implements BookService {
	
	@Autowired
	BookRepository bookRepository;


	@Override
	public BookStatus addBook(Book book) {
		// TODO Auto-generated method stub
		BookStatus bookStatus = new BookStatus(0, "Not Found", null);
		if(!bookRepository.existsById(book.getbookId())) {
			bookRepository.save(book);
			bookStatus.setBookStatus(1);
			bookStatus.setMessage("Added Successfully");
			bookStatus.setBook(book);
			
		}
		
		return bookStatus;
	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		List<Book> book = bookRepository.findAll();
		return book;
	}

	@Override
	public BookStatus getBookById(int bookid) {
		// TODO Auto-generated method stub
		BookStatus bookStatus = new BookStatus(0, "Not FOund", null);
		Optional<Book> b = bookRepository.findById(bookid);
		if(b.isPresent()) {
			bookStatus.setBookStatus(1);
			bookStatus.setMessage("Book Found");
			bookStatus.setBook(b.get());
		}
		return bookStatus;
	}

	@Override
	public List<Book> getBooksByCategory(String category) {
		// TODO Auto-generated method stub
		List<Book> books = bookRepository.findByCategory(category);
		return books;
	}

	@Override
	public List<Book> getBooksByAuthor(String author) {
		// TODO Auto-generated method stub
		List<Book> books = bookRepository.findByAuthor(author);
		return books;
	}

	@Override
	public BookStatus updateBook(Book book) {
		BookStatus bookStatus = new BookStatus(0, " Book Not Found", null);
		if(bookRepository.existsById(book.getbookId())) {
			bookRepository.save(book);
			bookStatus.setBookStatus(1);
			bookStatus.setMessage("Added Successfully");
			bookStatus.setBook(book);
			
		}
		
		return bookStatus;
	}

	@Override
	public BookStatus deleteBook(int bookid) {
		// TODO Auto-generated method stub
		BookStatus bookStatus = new BookStatus(0, "Not FOund", null);
		Optional<Book> b = bookRepository.findById(bookid);
		if(b.isPresent()) {
			bookStatus.setBook(b.get());
			bookRepository.deleteById(bookid);
		   
			bookStatus.setBookStatus(1);
			bookStatus.setMessage("Book Deleted succesfully");
			
		}
		return bookStatus;
	}
	
	
	

}

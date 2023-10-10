package com.empower.product.service;

import java.util.List;

import com.empower.product.entity.Book;
import com.empower.product.entity.BookStatus;

public interface BookService {

	BookStatus addBook(Book book);

	List<Book> getAllBooks();

	BookStatus getBookById(int bookid);

	List<Book> getBooksByCategory(String category);

	List<Book> getBooksByAuthor(String author);

	BookStatus updateBook(Book book);

	BookStatus deleteBook(int bookid);

}

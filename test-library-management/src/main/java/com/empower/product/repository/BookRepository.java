package com.empower.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empower.product.entity.Book;
@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	
	List<Book> findByCategory(String category);
	List<Book> findByAuthor(String author);


}

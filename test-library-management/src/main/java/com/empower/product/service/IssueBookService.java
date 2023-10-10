package com.empower.product.service;

import java.util.List;

import com.empower.product.entity.IssueBook;
import com.empower.product.entity.IssueBookStatus;

public interface IssueBookService {

	IssueBookStatus borrowBook(IssueBook newIssueBook);

	IssueBookStatus returnBook(int issueId);

	List<IssueBook> getAllbooks();

	List<IssueBook> getAllbooksByUsername(String username);


}

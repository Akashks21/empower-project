package com.empower.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empower.product.entity.IssueBook;
import com.empower.product.entity.IssueBookStatus;
import com.empower.product.repository.IssueBookRepository;
import com.empower.product.repository.LoginRepository;
@Service
public class IssueBookServiceImplementation implements IssueBookService{

	@Autowired
	private IssueBookRepository issueBookRepository;
	@Autowired
	LoginRepository loginRepository;
	@Override
	public IssueBookStatus borrowBook(IssueBook newIssueBook) {
		// TODO Auto-generated method stub
		IssueBookStatus issueBookStatus=new IssueBookStatus(new IssueBook() , "Book Not Issued", 0);
		if(!issueBookRepository.existsById(newIssueBook.getIssueBookId()) && loginRepository.existsById(newIssueBook.getMemberUsername())) {
			issueBookRepository.save(newIssueBook);
			issueBookStatus.setIssueBook(newIssueBook);
			issueBookStatus.setStatusMessage("Added Successfully");
			issueBookStatus.setStatusCode(1);
			
		}
		return issueBookStatus;
	}

	@Override
	public IssueBookStatus returnBook(int issueId) {
		// TODO Auto-generated method stub
		IssueBookStatus issueBookStatus=new IssueBookStatus(new IssueBook() , "Book Not Issued", 0);
		if(issueBookRepository.existsById(issueId)) {
			issueBookRepository.deleteById(issueId);
			
			issueBookStatus.setStatusCode(1);
			
		}
		return issueBookStatus;
	}

	@Override
	public List<IssueBook> getAllbooks() {
		// TODO Auto-generated method stub
		List<IssueBook> list = issueBookRepository.findAll();
		return list;
	}

	@Override
	public List<IssueBook> getAllbooksByUsername(String username) {
		// TODO Auto-generated method stub
		List<IssueBook> list = issueBookRepository.findByMemberUsername(username);
		return list;
	}


	}



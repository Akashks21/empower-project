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

import com.empower.product.entity.IssueBook;
import com.empower.product.entity.IssueBookStatus;
import com.empower.product.service.IssueBookService;

@CrossOrigin("*")
@RestController
@RequestMapping("/issuebook")
public class IssueBookController {

	@Autowired
	private IssueBookService issueBookService;
	
	
	@PostMapping("/borrowBook")
	public ResponseEntity<IssueBookStatus> borrowBook(@RequestBody IssueBook newIssueBook)
	{
		ResponseEntity<IssueBookStatus> responseEntity=null;
		IssueBookStatus issueBookStatus=issueBookService.borrowBook(newIssueBook);
		if(issueBookStatus.getStatusCode()==0) {
			responseEntity = new ResponseEntity<IssueBookStatus>(issueBookStatus,HttpStatus.NOT_FOUND);
			
		}else {
			responseEntity = new ResponseEntity<IssueBookStatus>(issueBookStatus,HttpStatus.OK);
		}
		return responseEntity;
	}
	
	@DeleteMapping("/returnBook/{issueId}")
	public ResponseEntity<IssueBookStatus> returnBook(@PathVariable int issueId)
	{
		ResponseEntity<IssueBookStatus> responseEntity=null;
		IssueBookStatus issueBookStatus=issueBookService.returnBook(issueId);
		if(issueBookStatus.getStatusCode()==0) {
			responseEntity = new ResponseEntity<IssueBookStatus>(issueBookStatus,HttpStatus.NOT_FOUND);
			
		}else {
			responseEntity = new ResponseEntity<IssueBookStatus>(issueBookStatus,HttpStatus.OK);
		}
		return responseEntity;
	}
	
	
	
	@GetMapping("/getissuedbooks")
	public ResponseEntity<List<IssueBook>> getAllIssuedBooks(){
		ResponseEntity<List<IssueBook>> re = null;
		List<IssueBook> issuedBooks = issueBookService.getAllbooks();
		if(issuedBooks.isEmpty()) {
			System.out.println("Book Not Found");
			re = new ResponseEntity<List<IssueBook>>(issuedBooks,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<List<IssueBook>>(issuedBooks,HttpStatus.OK);
		}
		return re;
	}
	
	
	@GetMapping("/getbooksbyusername/{username}")
	public ResponseEntity<List<IssueBook>> getAllBooksById(@PathVariable String username){
		ResponseEntity<List<IssueBook>> re = null;
		List<IssueBook> issuedBooks = issueBookService.getAllbooksByUsername(username);
		if(issuedBooks.isEmpty()) {
			System.out.println("Book Not Found");
			re = new ResponseEntity<List<IssueBook>>(issuedBooks,HttpStatus.NOT_FOUND);
		}else {
		
			re = new ResponseEntity<List<IssueBook>>(issuedBooks,HttpStatus.OK);
		}
		return re;
	}
	

}


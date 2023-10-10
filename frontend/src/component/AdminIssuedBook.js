import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import issue_book_url from '../service/IssueUrl';
import BookForAdmin from './BookForAdmin';
import Menu from './Menu'

export default function AdminIssuedBook() {

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        getBooksFromServer();
    },[])


    const getBooksFromServer = ()=>{
        axios.get(`${issue_book_url}/getissuedbooks`).then(
            (response)=>{
               console.log(response.data);
               setBooks(response.data);
            },(error)=>{
                console.log(error);
               
            }
        )
    }
  return (
    <div>
      <Row>
        <Col md={4}>
            <Menu/>
        </Col>
        <Col>
        {
         books.length > 0 ? books.map((book)=>(
          <BookForAdmin key={book.bookId} book={book}/>
          
          
       )) : "No Books"}

        </Col>
      </Row>
    </div>
  )
}

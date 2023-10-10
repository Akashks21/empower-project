import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, CardText, Col, ListGroup, Row } from 'reactstrap';
import issue_book_url from '../service/IssueUrl';
import MyList from './MyList';

export default function IssueList() {
    const {id} = useParams();
    console.log(id);
   const [books,setBooks] = useState([]);

   useEffect(()=>{
    getBooks();
   },[])

  const getBooks = ()=>{
    axios.get(`${issue_book_url}/getbooksbyusername/${id}`).then(
      (response)=>{
           console.log(response.data);
           setBooks(response.data)
      },(error)=>{
           console.log(error);
      }
    )
  }

  const updateList = (bookId) =>{
    setBooks(books.filter((b) => b.bookId != bookId));
   };


  return (
  <>
   <Row>
    <Col md={4}>
    <ListGroup>
    <Link className='list-group-item list-group-item-action' to = {`/membermenu/${id}`} style = {{backgroundColor : 'aqua',marginTop : '15px'}}> Member Info</Link>
          
          <Link className='list-group-item list-group-item-action' to={`/viewbooksformember/${id}`} style = {{backgroundColor : 'aqua',}}>view Books</Link>
          <Link className='list-group-item list-group-item-action' to={`/issuelist/${id}`}  style={{backgroundColor:'aqua'}}>Issue List</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbycategory/${id}`}  style={{backgroundColor:'aqua'}}> Search By Category</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbyauthor/${id}`}  style={{backgroundColor:'aqua'}}> Search By Author</Link>
          <Link className='list-group-item list-group-item-action' to={`/`}  style={{backgroundColor:'aqua'}}> Log Out</Link>
    </ListGroup>
    </Col>
    <Col>
    <Card style={{marginTop : '15px'}}>
    <CardBody>
        <CardText>
       {
        books.length > 0 ? books.map((book)=>(
          <MyList key = {book.bookId} book={book} memberUsername = {id} update = {updateList}/>
        )) : "No Books"
       }
        </CardText>
    </CardBody>
   </Card>


    </Col>
   </Row>
  
  
  
  
  </>
  )
}


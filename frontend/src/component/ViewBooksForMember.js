import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Col, Container, ListGroup, Row } from 'reactstrap';
import base_url from '../service/api';
import IssueList from './IssueList';
import ShowBook from './ShowBook';

export default function ViewBooksForMember() {
  
  const navigate  = useNavigate()
    const {id} = useParams();
    

   

  const [books,setBooks] = useState([]);






useEffect(()=>{
getBooks();

document.body.style.backgroundColor = "aliceblue"

},[]);


  const getBooks = async ()=>{
    axios.get(`${base_url}/getbooks`).then(
      (response)=>{
          console.log(response.data);
          setBooks(response.data);
         
          
          
         
      },(error)=>{
         console.log(error);
      }
    )
  
  }


  return (
    <>
    <Row>
        <Col md={4}>
            <ListGroup>
            <Link className='list-group-item list-group-item-action' to = {`/membermenu/${id}`} style = {{backgroundColor : 'aqua',marginTop : '15px'}}> Member Info</Link>
          
          <Link className='list-group-item list-group-item-action' to={`/viewbooksformember/${id}`} style = {{backgroundColor : 'aqua'}}>view Books</Link>
          <Link className='list-group-item list-group-item-action' to={`/issuelist/${id}`}  style={{backgroundColor:'aqua'}}>Issue List</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbycategory/${id}`}  style={{backgroundColor:'aqua'}}> Search By Category</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbyauthor/${id}`}  style={{backgroundColor:'aqua'}}> Search By Author</Link>
          <Link className='list-group-item list-group-item-action' to={`/`}  style={{backgroundColor:'aqua'}}> Log Out</Link> 
            </ListGroup>
        
        </Col>
        <Col>
       
      {
         books.length > 0 ? books.map((book)=>(
          <ShowBook key={book.bookId} book={book} memberUsername = {id} />
          
          
       )) : "No Books"}

        
        </Col>
    </Row>
    
    </>
  )
}




/**
 * 
 *   {
           books.map(book =>(
           
            
            <Card className='text-center' style={{backgroundColor : 'aqua', marginBottom : '20px'}}>
              <h3>{id}</h3>
               <CardBody>
                <h4 key={book.id}> {book.name}</h4>
                 <CardText>Book Id : {book.bookId}</CardText>
                 <CardText>ISBN No : {book.isbnNo}</CardText>
                 <CardText>Author : {book.author}</CardText>

                <CardText>Publisher : {book.publisher}</CardText>
                 <CardText>Category : {book.category}</CardText>
                 <CardText>Published Date : {book.publishedDate}</CardText>

                 <Container>
                  <Button color='primary' onClick={handleClick}> Borrow</Button>
                 </Container>
               </CardBody>
          
            </Card>
           ))



         }
 */
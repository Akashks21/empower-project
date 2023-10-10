import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, ListGroup , Row} from 'reactstrap';
import base_url from '../service/api';
import MemberMenu from './MemberMenu';
import ShowBook from './ShowBook';

export default function SearchByAuthor() {
    const{id} = useParams();
    const[author,setAuthor] = useState({});
    const[books,setBooks] = useState([])

     useEffect(()=>{
        document.body.style.backgroundColor = 'aliceblue'
    },[])


    const handleSubmit = (e) =>{
     e.preventDefault();
     console.log(author);
     console.log(author.author);
     getBookFromServer(author);
    }

    const getBookFromServer = ()=>{
        axios.get(`${base_url}/getbyauthor/${author.author}`).then(
            (response)=>{
                setBooks(response.data);
          

            },(error)=>{
                console.log(error);
             
            }
        )
    }

  return (
    <div style={{marginTop : '15px'}}>
      <Row>
        <Col md={4}>
        <ListGroup >
          <Link className='list-group-item list-group-item-action' to = {`/membermenu/${id}`} style={{backgroundColor:'aqua' , marginTop : '15px'}}> Member Info</Link>
          <Link className='list-group-item list-group-item-action' to={`/viewbooksformember/${id}`}  style={{backgroundColor:'aqua'}}>View Books</Link>
          <Link className='list-group-item list-group-item-action' to={`/issuelist/${id}`}  style={{backgroundColor:'aqua'}}> Issue List</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbycategory/${id}`}  style={{backgroundColor:'aqua'}}> Search By Category</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbyauthor/${id}`}  style={{backgroundColor:'aqua'}}> Search By Author</Link>
          <Link className='list-group-item list-group-item-action' to={`/`}  style={{backgroundColor:'aqua'}}> Log Out</Link>
        </ListGroup>
      
            </Col>
            <Col>
              <Card style={{marginTop : '15px',backgroundColor : 'aquamarine'}}>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            
                        <label for="author">Author</label>
                         <Input
                         type='text'
                         placeholder='author'
                         name='author'
                          id='author'
                          onChange={(e)=>{
                            setAuthor({...author, author : e.target.value})
                          }}
                           
                        

                         />
                        </FormGroup>
                        <Container className='text-center'>
                            <Button type='submit' color='primary'>
                                Search
                            </Button>
                        </Container>
                    </Form>
                </CardBody>
              </Card>

              {
         books.length > 0 ? books.map((book)=>(
          <ShowBook key={book.bookId} book={book} memberUsername = {id} />
          
          
       )) : <h5 className='text-center'>No Books Found</h5>}
            </Col>
      </Row>
    </div>
  )
}


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Menu from './Menu';
import issue_book_url from '../service/IssueUrl';
import BookForAdmin from './BookForAdmin';
import { toast } from 'react-toastify';

export default function IssuedForUser() {
    const [username,setUsername] = useState({});
    const[books,setBooks]  = useState([]);
    
    useEffect(()=>{
        document.body.style.backgroundColor = 'aliceblue'
    },[])
 
const handleSubmit = (e)=>{
     console.log(username);
     console.log(username.username);
     getBooksForUsername(username);
     e.preventDefault();
}

const getBooksForUsername = (username)=>{
    axios.get(`${issue_book_url}/getbooksbyusername/${username.username}`).then(
        (response)=>{
            console.log(response.data);
            setBooks(response.data)
        },(error)=>{
             console.log(error);
             setBooks([]);
            
        }
    )
}


  return (
    <div>
     <Row>
        <Col md={4}><Menu/></Col>
        <Col>
        <Card style={{marginTop : '15px', backgroundColor : 'aqua'}}>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <label for="username">Username</label>
                         <Input
                         type='text'
                         placeholder='username'
                         name='username'
                          id='username'
                          onChange={(e)=>{
                            setUsername({...username, username : e.target.value})
                          }}
                           
                        

                         />
                    </FormGroup>
                    <Container className='text-center'>
                        <Button type='submit'>View Books</Button>
                    </Container>
                </Form>
          
            </CardBody>
        </Card>
        {
         books.length > 0 ? books.map((book)=>(
          <BookForAdmin key={book.bookId} book={book}/>
          
          
       )) : "No Books"}
        </Col>
     </Row>
    </div>
  )
}

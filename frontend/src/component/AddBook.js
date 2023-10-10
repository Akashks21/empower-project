
import React, { useEffect, useState } from 'react'
import { Container, Form, FormGroup, Input, Button, Row, Col, Card, CardBody } from 'reactstrap'
import axios from 'axios';
import base_url from '../service/api';
import { toast } from 'react-toastify';
import Menu from './Menu';

export default function AddBook() {
   useEffect(()=>{
       document.title = "Add Book"
    },[]);

    useEffect(()=>{
      document.body.style.backgroundColor = "aliceblue"
       
       
     },[])

  const [book,setBook] = useState({});

  //Form Handler Function

  const handleForm=(e)=>{
   addBookToServer(book);
   e.preventDefault();
  }

  // Creating function too post data to server

  const addBookToServer = (data)=>{  
    axios.post(`${base_url}/addbook`,data).then(
      (response)=>{
       // console.log(response);
        //console.log("success");
        toast.success("Book Added Successfully" , {
         position : 'bottom-center',
         autoClose : 2000,
         hideProgressBar : false,
         closeOnClick : true,
         pauseOnHover : false,
         theme : 'dark'
        })
      },(error)=>{
         console.log(error)
         toast.error("Something went wrong",{
            position : 'bottom-center',
            autoClose : 2000,
            hideProgressBar : false,
            closeOnClick : true,
            pauseOnHover : false,
            theme : 'dark'
           })
      }
    )
  }


  return (
   <div style={{marginTop : '15px'}}>

   
   <Row>
      <Col md={4}><Menu/></Col>
      <Col>
          <Card color='secondary'>
            <CardBody>
            <Form onSubmit={handleForm} color='secondary'>
    <h2 className='text-center my-3'>Add Details For the Book</h2>
     <FormGroup>
        <label for="bookId">Book Id</label>
        <Input
        type='text'
        placeholder='bookid'
        name='bookId'
        id='bookId'
        onChange={(e) =>{
             setBook({...book, bookId : e.target.value});
        }}
        />
     </FormGroup>

     <FormGroup>
        <label for="name">Name</label>
        <Input
        type='text'
        placeholder='name'
        name='name'
        id='name'
        onChange={(e) =>{
         setBook({...book, name : e.target.value});
    }}
        />
     </FormGroup>
     
     <FormGroup>
        <label for="isbnNo">ISBN No</label>
        <Input
        type='text'
        placeholder='isbnNo'
        name='isbnNo'
        id='isbnNo'
        onChange={(e) =>{
         setBook({...book, isbnNo : e.target.value});
    }}
        />
     </FormGroup>
     <FormGroup>
        <label for="author">Author</label>
        <Input
        type='text'
        placeholder='Author'
        name='author'
        id='author'
        onChange={(e) =>{
         setBook({...book, author : e.target.value});
    }}
        />
     </FormGroup>
     <FormGroup>
        <label for="publisher">Publisher</label>
        <Input
        type='text'
        placeholder='publisher'
        name='publisher'
        id='publisher'
        onChange={(e) =>{
         setBook({...book, publisher : e.target.value});
    }}
        />
     </FormGroup>
     <FormGroup>
        <label for="category">Category</label>
        <Input
        type='text'
        placeholder='category'
        name='category'
        id='category'
        onChange={(e) =>{
         setBook({...book, category : e.target.value});
    }}
        />
     </FormGroup>
     <FormGroup>
        <label for="publishedDate">Published Date</label>
        <Input
        type='text'
        placeholder='YYYY-MM-DD'
        name='publishedDate'
        id='publishedDate'
        onChange={(e) =>{
         setBook({...book, publishedDate : e.target.value});
    }}
        />
     </FormGroup>
    
    <Container className='text-center'>
        <Button type='submit' color='success'>Add Book</Button>
        <Button  type='reset' color='warning ms-3'>Clear</Button>
    </Container>
     
   </Form>
            </CardBody>
          </Card>
   
      </Col>
   </Row>
   </div>
  )
}

import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, Col,  Container,  Form,  FormGroup,  Input, Row } from 'reactstrap';
import axios from 'axios';
import base_url from '../service/api';
import Menu from './Menu';
import { toast } from 'react-toastify';

export default function UpdateBook() {
  const {bookId} = useParams();
  console.log(bookId);
  const navigate = useNavigate();

 const [books,setBooks] = useState({
       bookId : bookId,
       isbnNo : '',
       name : '',
       category : '',
       publishedDate : '',
       author : '',
       publisher : '',
 });

 const handleSubmit=(e)=>{
 
  setBooks({...books, bookId : bookId})
   console.log(books);
   updateBook(books);
   e.preventDefault();
   
 }

 const handleClear = () =>{
       setBooks({
              bookId : '',
              isbnNo : '',
              name : '',
              category : '',
              publishedDate : '',
              author : '',
              publisher : '',   
       })
 }
 const updateBook=(data)=>{
       axios.post(`${base_url}/updatebook`,data).then(
              (response)=>{
        toast.success("book Updated Successfully",{
              position : 'bottom-center',
              autoClose : 1500,
              hideProgressBar : false,
              closeOnClick : true,
              pauseOnHover : false,
              theme : 'dark'
             })
        navigate('/home')
               },(error)=>{
                    toast.error("Update Fail",{
                     position : 'bottom-center',
                     autoClose : 1500,
                     hideProgressBar : false,
                     closeOnClick : true,
                     pauseOnHover : false,
                     theme : 'dark'
                    })
              }
       )
 }


  return (
   <>
   
    <Row>
      <Col md={4}><Menu/></Col>
      <Col>
      <Card style={{backgroundColor : 'aquamarine'}}>
         <h2 className='text-center'>Update book</h2>
         
         <CardBody>
            <Form onSubmit={handleSubmit}>

            <FormGroup>
               <label for="bookId">Book Id</label>
        <Input
        type='text'
        placeholder='bookId'
        name='bookId'
        id='bookId'
        value={bookId}
       readOnly
        />
               </FormGroup>


               <FormGroup>
               <label for="isbnNo">ISBN No</label>
        <Input
        type='text'
        placeholder='isbnNo'
        name='isbnNo'
        id='isbnNo'
        onChange={(e)=>{
         setBooks({...books, isbnNo : e.target.value})
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
        onChange={(e)=>{
         setBooks({...books, name : e.target.value})
        }}
        />
               </FormGroup>

               <FormGroup>
               <label for="author">Author</label>
        <Input
        type='text'
        placeholder='author'
        name='author'
        id='author'
        onChange={(e)=>{
         setBooks({...books, author : e.target.value})
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
        onChange={(e)=>{
         setBooks({...books, publisher : e.target.value})
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
        onChange={(e)=>{
         setBooks({...books, category : e.target.value})
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
        onChange={(e)=>{
         setBooks({...books, publishedDate : e.target.value})
        }}
        />
               </FormGroup>

               <Container className='text-center'>
                  <Button color='success' type='submit'> Update</Button>
                  <Button color='warning' className='ms-3' onClick={handleClear} type='reset'>Clear</Button>
               </Container>
            </Form>
         </CardBody>
      </Card>
      </Col>
    </Row>
   </>
  )
}

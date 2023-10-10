import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button, Row, Col } from "reactstrap";
import axios from "axios";
import base_url from "../service/api";
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Menu from './Menu';



export default function Book({book, update}) {

  useEffect(()=>{
    document.body.style.backgroundColor = "aliceblue"
     
     
   },[])

//Delete Book

const deleteBook=(bookId)=>{
  axios.delete(`${base_url}/deletebook/${bookId}`).then(
    (response)=>{
        toast.success("Book Deleted Successfully",{
          position : 'bottom-center',
          autoClose : 2000,
          hideProgressBar : false,
          closeOnClick : true,
          pauseOnHover : false,
          theme : 'dark'
         })
        update(bookId);
    },(error)=>{
      toast.error("Something went wrong",{
        position : 'bottom-center',
        autoClose : 2000,
        hideProgressBar : false,
        closeOnClick : true,
        pauseOnHover : false,
        theme : 'dark'
       });
    }
  )
}


  return (
    
      <Card style={{marginTop : '15px', backgroundColor : 'aqua'}}>
        <CardBody className="text-center">
            <h4 className="fw-bold "> <span style={{fontStyle : 'italic', fontWeight : 'bold'}}>{book.name}</span></h4>
            <CardText>Book id : {book.bookId} </CardText>
            <CardText>ISBN No : {book.isbnNo} </CardText>
            <CardText>Author : {book.author} </CardText>
            <CardText>Publisher : {book.publisher}</CardText>
            <CardText> Category : {book.category} </CardText>
            <CardText>Published Date : {book.publishedDate}  </CardText>

            <Container className="text-center">
                
                <Button color="danger ms-3" onClick={()=>{
                  deleteBook(book.bookId);
                }}>Delete</Button>
                <Link tag="a" to = {`/update-book/${book.bookId}`} className='ms-2' action><Button>Update</Button></Link>
            </Container>
        </CardBody>
    </Card>
      
      
      
    
  )
}

import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import Menu from './Menu';




export default function Home() {
  useEffect(()=>{

    document.title = "Home"
  },[]);


  return (
    <>
    <Row>
      <Col md={4} ><Menu/></Col>
      <Col>
      <div className="mt-4 p-5 bg-light text-dark rounded text-center" >
         <h2>Welcome To Library Management System</h2>
         <p> Welcome to the library management System here we will trust you the most helpfull services with smotthness!!! </p>
         
    </div>
      
      
      
      </Col>
    </Row>
    
    </>
  )
}



import React, { useEffect } from "react";
import { Container, Button, Row, Col, Card, CardBody } from "reactstrap";
import Menu from './Menu';




export default function Contact() {
  useEffect(()=>{

    document.title = "Contact "
  },[]);


  return (
    <>
    <Row>
      <Col md={4} ><Menu/></Col>
      <Col>
         <Card style={{backgroundColor : 'aquamarine' , marginTop : '15px'}}>
          <CardBody>
          <div className="mt-4 p-5 bg-light text-dark rounded text-center"  style={{backgroundColor : 'aquamarine'}}>
         <h3>Thank You For Using Our Services</h3>
         <hr/>
      
         <h5>Feel Free To Contact regarding Any Query on Below Details</h5>
         <hr/>
        
         <p> <span style={{fontStyle : 'italic' , fontWeight : 'bold'}}>Email id : </span> lms@gmail.com </p>
         <p> <span style={{fontStyle : 'italic' , fontWeight : 'bold'}}>Website : </span> www.lms.com</p>
         <p> <span style={{fontStyle : 'italic' , fontWeight : 'bold'}}>Fax </span> +91-12-3456 4004</p>

         
    </div>
          </CardBody>
         </Card>
      
      
      
      </Col>
    </Row>
    
    </>
  )
}
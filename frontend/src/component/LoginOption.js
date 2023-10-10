import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import '../css/background.css';


export default function LoginOption() {
  useEffect(()=>{
    //document.body.style.backgroundImage = "url('../img/image.png')";
     
     
   })
  return (
  
   <div className='bg'>
   <Container  className='mb-10' >
        <Row>
            <Col sm={{size : '4' , offset : 4}}>
                <Card style={{backgroundColor : 'aqua',marginTop : '130px'}} className='mt-10'>
                  <CardBody>
                  <h4 className='text-center'>Login as : </h4>
             <Container className='text-center'>
                <Link to='/login'><Button color='primary'>Admin</Button></Link>
                <Link to='/memberlogin'><Button color='primary' className='ms-4'>Member</Button></Link>
                </Container>
                  </CardBody>

                </Card>
             
             
            
            </Col>
        </Row>
    </Container>



   
    </div>
   
  )
}

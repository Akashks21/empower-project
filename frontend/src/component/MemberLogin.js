import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import base_member_api from '../service/member_api'
import '../css/background.css'

export default function MemberLogin() {

    const navigate = useNavigate();

   
    const [login,setLogin] = useState({
        username : '',
        password : '',

    })

   const handleSubmit=(e)=>{
    e.preventDefault();
    sendDataToUser(login);
    
   }


   const sendDataToUser=(login)=>{
    axios.post(`${base_member_api}/login`,login).then(
        (response)=>{
             toast.success("Login Successfull",{
                position : 'bottom-right',
                autoClose : 2000,
                hideProgressBar : false,
                closeOnClick : true,
                pauseOnHover : false,
                theme : 'dark'
                
             })
              
                  navigate(`/membermenu/${login?.username}`)
            
              
           
        },(error)=>{
           toast.error("invalid Username or password",{
            position : 'bottom-right',
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
  
  
  <div className='bg'>

  
   <Container className='border-secondary'>
      <Row>
        <Col sm = {{size :'4', offset : 4}}>
            
            <Card color='info' style={{marginTop : '60px'}}>
                <CardBody>
                <h3 className='text-center'>Member Login</h3>
                    <Form onSubmit={handleSubmit}>

                     <FormGroup>
            <label for="username">Username </label>
        <Input
        type='text'
        placeholder='username'
        name='username'
        id='username'
       onChange={(e)=>{
        setLogin({...login, username : e.target.value})
       }}
     />
        </FormGroup>

        <FormGroup>
            <label for="Password">Password </label>
        <Input
        type='password'
        placeholder='password'
        name='password'
        id='password'
        onChange={(e)=>{
            setLogin({...login, password : e.target.value})
           }}
     />
        </FormGroup>
        


        <Container className='text-center'>
            <Button color='success' type='submit'> login</Button>
            <Button color='warning' type='reset' className='ms-3'>clear</Button>
        </Container>   
         </Form>

                </CardBody>
                <CardFooter style={{textAlign: 'right'}}>
                <Link to= '/signup'>
            <a href='#' style={{color: 'black'}}>
               Signup
            </a>
            </Link>
                </CardFooter>


            </Card>
             
             
            
        </Col>
      </Row>



   </Container>
   
   
   </div>
 
  )
}


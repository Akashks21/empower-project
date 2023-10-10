import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import base_member_api from '../service/member_api'
import '../css/background.css'

export default function Login() {

   const navigate =  useNavigate()

    const [admin,setAdmin] = useState({
        username : '',
        password : '',
    })

     const handleSubmit = (e) =>{
        e.preventDefault();
        sendAdminToUser(admin);
        console.log(admin);
     }



     const sendAdminToUser = (admin)=>{

                
        axios.post(`${base_member_api}/adminlogin`,admin).then(
            (response)=>{
                 toast.success("Login Sucessfull" ,{
                    position : 'bottom-right',
                    autoClose : 2000,
                    hideProgressBar : false,
                    closeOnClick : true,
                    pauseOnHover : false,
                    theme : 'dark'
                   })
                 navigate('/home');
            },(error)=>{
                 toast.error("Wrong Username or password",{
                    position : 'bottom-right',
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
   
   <div className='bg'> 
   <Container className='border-secondary'>
      <Row>
        <Col sm = {{size :'4', offset : 4}}>
            
            <Card color='secondary' style={{marginTop : '80px'}}>
                <CardBody>
                <h3 className='text-center'>Admin Login</h3>
                    <Form onSubmit={handleSubmit}>
                <FormGroup>
            <label for="username">Username </label>
        <Input
        type='text'
        placeholder='username'
        name='username'
        id='username'
        onChange={(e)=>{
            setAdmin({...admin, username : e.target.value})
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
            setAdmin({...admin, password : e.target.value})
        }}
     />
        </FormGroup>

        <Container className='text-center'>
            <Button color='success' type='submit'> login</Button>
            <Button color='warning' type='reset' className='ms-3'>clear</Button>
        </Container>
        </Form>
                </CardBody>
             
            </Card>
        </Col>
      </Row>



   </Container>
   
   </div>
  
  )
}

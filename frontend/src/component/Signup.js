import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, ListGroup, Row } from 'reactstrap'
import base_member_api from '../service/member_api'


export default function Signup() {
    
const navigate = useNavigate()

  const[data,setData] = useState({
   // memberId : '',
    firstName : '',
    lastName : '',
    email : '',
    contact : '',
    username : '',
    password : '',
  })


const [error,setError] = useState({
    errors : {},
    isError : false
})


useEffect(()=>{
    console.log(data)
document.body.style.backgroundColor = 'aliceblue'
},[data])

//Handle Change

const handleChange = (e)=>{
  
   
}

//resetting the form
const resetData =()=>{
    setData({
      //  memberId : '',
        firstName : '',
        lastName : '',
        email : '',
        contact : '',
        username : '',
        password : '',
    })
}

// submit the form

const submitForm = (e)=>{
    console.log(data);
   addMemberToServer(data);
   
   e.preventDefault();
}


const addMemberToServer = (data)=>{
    axios.post(`${base_member_api}/addmember`,data).then(
        (response)=>{
         toast.success("Successfull",{
            position : 'bottom-center',
            autoClose : 2000,
            hideProgressBar : false,
            closeOnClick : true,
            pauseOnHover : false,
            theme : 'dark'
           })
         navigate('/memberlogin')
        },(error)=>{
               console.log(error);
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
    <>
    <Container style={{marginTop : '15px'}}>
       
    <Row>
        
        <Col sm={{size :'6', offset : 3}}>
        <Card color='secondary'>
        <CardBody>
            <h2 className='text-center'>WElcome To sign Up page</h2>
         <Form onSubmit={submitForm}>


         {/* <FormGroup>
            <label for="memberId">Member Id</label>
        <Input
        type='text'
        placeholder='memberId'
        name='memberId'
        id='memberId'
        onChange={(e)=>{
            setData({...data, memberId : e.target.value})
        }}
       />
        </FormGroup> */}




            <FormGroup>
            <label for="firstName">First Name</label>
        <Input
        type='text'
        placeholder='firstName'
        name='firstName'
        id='firstName'
        onChange={(e)=>{
            setData({...data, firstName : e.target.value})
        }}
     />
        </FormGroup>



        <FormGroup>
            <label for="lastName">Last Name</label>
        <Input
        type='text'
        placeholder='lastName'
        name='lastName'
        id='lastName'
        onChange={(e)=>{
            setData({...data, lastName : e.target.value})
        }}
     />
        </FormGroup>




        <FormGroup>
            <label for="email">Email </label>
        <Input
        type='email'
        placeholder='email'
        name='email'
        id='email'
        onChange={(e)=>{
            setData({...data, email : e.target.value})
        }}
     />
        </FormGroup>




        <FormGroup>
            <label for="contact">Contact </label>
        <Input
        type='text'
        placeholder='contact'
        name='contact'
        id='contact'
        onChange={(e)=>{
            setData({...data, contact : e.target.value})
        }}
     />
        </FormGroup>




        <FormGroup>
            <label for="username">Username </label>
        <Input
        type='text'
        placeholder='username'
        name='username'
        id='username'
        onChange={(e)=>{
            setData({...data, username : e.target.value})
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
            setData({...data, password : e.target.value})
        }}
     />
        </FormGroup>



        <Container className='text-center m-4'>
            <Button color='dark' type='submit' >Submit</Button>
            <Button type='reset' color='danger' className='ms-3' onClick={resetData}>Clear</Button>
        </Container>
       
       </Form>
        </CardBody>
        <CardFooter style={{textAlign: 'right'}}>
                <Link to= '/memberlogin'>
            <a href='#' style={{color: 'black'}}>
               Login page
            </a>
            </Link>
                </CardFooter>
      </Card>

        </Col>
    </Row>
    </Container>
    </>
  )
}

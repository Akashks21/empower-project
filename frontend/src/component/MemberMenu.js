import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  Card, CardBody, CardText, Col, ListGroup, Row } from 'reactstrap';
import base_member_api from '../service/member_api';
import Menu from './Menu';
import MenuList from './MenuList';



export default function MemberMenu() {
  const [member,setMember] = useState([]);
  const [userId,setUserId] = useState([]);


  const {id} = useParams()
  console.log(id);
  
 useEffect(()=>{
  document.body.style.backgroundColor = "aliceblue"
  getMember();
   
 },[])

const getMember = async()=>{
  const result = axios.get(`${base_member_api}/getmemberbyusername/${id}`).then(
    (response)=>{
      console.log(response.data)
      setMember(response.data)
      setUserId(response.data)
    },(error)=>{
      console.log(error);
    }
  )
  
}
 


  return (
    <>
    <Row>
      <Col md={4}>
        <ListGroup >
          <Link className='list-group-item list-group-item-action' to = {MemberMenu} style={{backgroundColor:'aqua' , marginTop : '15px'}}> Member Info</Link>
          <Link className='list-group-item list-group-item-action' to={`/viewbooksformember/${id}`}  style={{backgroundColor:'aqua'}}>View Books</Link>
          <Link className='list-group-item list-group-item-action' to={`/issuelist/${id}`}  style={{backgroundColor:'aqua'}}> Issue List</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbycategory/${id}`}  style={{backgroundColor:'aqua'}}> Search By Category</Link>
          <Link className='list-group-item list-group-item-action' to={`/searchbyauthor/${id}`}  style={{backgroundColor:'aqua'}}> Search By Author</Link>
          <Link className='list-group-item list-group-item-action' to={`/`}  style={{backgroundColor:'aqua'}}> Log Out</Link>
        </ListGroup>
      
      </Col>

      <Col>
          
          {
           member.map(user => (
            
            <Card className='text-center' style={{backgroundColor : 'aquamarine',marginTop : '15px'}}>  
              <CardBody>
              <h3 className='text-center'> Welcome <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{id} </span></h3><br/> <hr/>
                <CardText key={user.id}>  Member Id : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.memberId}</span></CardText>
                <CardText> First Name : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.firstName}</span></CardText>
                <CardText> Last Name : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.lastName}</span></CardText>
                <CardText> email : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.email}</span></CardText>
                <CardText> Contact : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.contact}</span></CardText>
                <CardText> Username : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{user.username}</span></CardText>
                
                
              </CardBody>
            </Card>
          ))
          }



           
      </Col>
    </Row>
    </>
  )
}

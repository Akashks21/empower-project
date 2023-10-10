import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function menu() {
  return (
   <div style={{marginTop : '15px'}}>
       <ListGroup >
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action' tag="a" to='/home' action>Home</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action' tag="a" to='/view-books' action>view All Books</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action' tag="a" to = '/add-book' action>Add Book</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action'  tag="a" to='/adminIssuedbooks' action>Issued Books List</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action'  tag="a" to='/issuedforusers' action>Issued For User</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action'  tag="a" to='/contact' action>Contact</Link>
        <Link style={{backgroundColor : 'aquamarine',marginBottom : '2px'}} className='list-group-item list-group-item-action'  tag="a" to='/' action>Log Out</Link>
    </ListGroup>
   </div>
  )
}

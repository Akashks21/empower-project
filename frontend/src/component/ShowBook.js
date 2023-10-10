import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardText, Container } from 'reactstrap'
import issue_book_url from '../service/IssueUrl'


export default function ShowBook({book, memberUsername}) {
  const navigate = useNavigate();

  const [issue,setIssue] = useState({
    memberUsername : memberUsername,
    bookId : book.bookId
  })



const handleClick=(bookid)=>{
  setIssue({...issue, bookId : bookid})
  
 sendIssueDetailsToUser(issue);
navigate(`/membermenu/${memberUsername}`)
 
}





const sendIssueDetailsToUser=(data)=>{
    axios.post(`${issue_book_url}/borrowBook`,data).then(
        (response)=>{
           toast.success("Book Borrowed Successfully  \n Need To Be Returned Within 30 Days",{
            position : 'bottom-center',
            autoClose : 4000,
            hideProgressBar : false,
            closeOnClick : true,
            pauseOnHover : false,
            theme : 'dark'
           })
        },(error)=>{
           console.log(error)
           toast.error("Something Went Wrong",{
            position : 'bottom-center',
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
    <div>
    <Card className='text-center' style={{backgroundColor : 'aquamarine', marginBottom : '10px', marginTop : '15px'}}>
    <CardBody>
    <h4 className="fw-bold "> <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.name}</span></h4>
            <CardText>Book id : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.bookId}</span> </CardText>
            <CardText>ISBN No : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.isbnNo}</span> </CardText>
            <CardText>Author : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.author}</span> </CardText>
            <CardText>Publisher : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.publisher}</span></CardText>
            <CardText> Category : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.category}</span> </CardText>
            <CardText>Published Date : <span style={{fontStyle : 'italic' ,fontWeight : 'bold'}}>{book.publishedDate}</span>  </CardText>
            <Container>
                <Button color='primary' onClick={()=>{
                    handleClick(book.bookId)
                    
                }}>Borrow</Button>
               
              
            </Container>
    </CardBody>
 </Card>

  
   </div>
  )
}





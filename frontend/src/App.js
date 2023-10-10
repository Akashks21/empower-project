
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Book from './component/Book';
import AllBooks from './component/AllBooks';
import AddBook from './component/AddBook';
import Header from './component/Header';
import Menu from './component/Menu';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import UpdateBook from './component/UpdateBook';
import Signup from './component/Signup';
import Login from './component/Login';
import LoginOption from './component/LoginOption';
import MemberLogin from './component/MemberLogin';
import MemberMenu from './component/MemberMenu';
import ViewBooksForMember from './component/ViewBooksForMember'
import { useState } from 'react';
import IssueList from './component/IssueList';
import AdminIssuedBook from './component/AdminIssuedBook';
import IssuedForUser from './component/IssuedForUser';
import SearchByCategory from './component/SearchByCategory';
import SearchByAuthor from './component/SearchByAuthor';
import Contact from './component/Contact';







function App() {

  const btnHandle = () =>{
    toast.success("Done!",{
      position : 'top-center'
    })
  
  }
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>

<Container >
  <Header/>
  <Row>
    <Col>
    <Routes>
    <Route path='/' element = {<LoginOption/>}/>
    <Route path='/viewbooksformember/:id' element = {<ViewBooksForMember/>}/>
    <Route path='/issuelist/:id' element = {<IssueList/>}/>
    <Route path='/searchbycategory/:id' element = {<SearchByCategory/>}/>
    <Route path='/searchbyauthor/:id' element = {<SearchByAuthor/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/membermenu/:id' element = {<MemberMenu/>}/>
    <Route path='/memberlogin' element = {<MemberLogin/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/adminIssuedbooks' element = {<AdminIssuedBook/>}/>
    <Route path='/home' element = {<Home/>}/>
    <Route path = '/add-book' element = {<AddBook/>}/>
    <Route path = '/view-books' element = {<AllBooks/>}/>
    <Route path = '/issuedforusers' element = {<IssuedForUser/>}/>
    <Route path = '/update-book/:bookId' element = {<UpdateBook/>}/>
    issuedforusers
    
    </Routes>
    </Col>
  </Row>
</Container>

      
      </BrowserRouter>
    </div>
   
  );
}

export default App;



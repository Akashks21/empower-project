import Book from "./Book";
import React, { useEffect, useState } from "react";
import base_url from "../service/api";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateBook from "./UpdateBook";
import { Col, Row } from "reactstrap";
import Menu from "./Menu";

export default function AllBooks() {
  useEffect(() => {
    document.title = "All Books";
    document.body.style.backgroundColor = "aliceblue"
  }, []);
 

  //Function to call api
  const getAllBooks = () => {
    axios.get(`${base_url}/getbooks`).then(
      (response) => {
        console.log(response);
        //console.log(response.data);

        setBooks(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  // update records

  const updateList = (bookId) => {
    setBooks(books.filter((b) => b.bookId != bookId));
  };

  const [books, setBooks] = useState([]);

  return (
    <>
      <Row>
        <Col md={4}>
          <Menu />
        </Col>
        <Col>
          <div>
            <h2 className="text-center" style={{fontStyle : 'italic' , fontWeight : 'bold',textDecoration : 'Underline'}}>All Books</h2>

            {books.length > 0
              ? books.map((book) => (
                  <Book key={book.bookId} book={book} update={updateList} />
                ))
              : "No Books"}
          </div>
        </Col>
      </Row>
    </>
  );
}

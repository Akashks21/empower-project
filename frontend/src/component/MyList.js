import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import issue_book_url from "../service/IssueUrl";

export default function MyList({ book, memberUsername, update }) {
  const navigate = useNavigate();

  const deleteBook = (issueId) => {
    axios.delete(`${issue_book_url}/returnBook/${issueId}`).then(
      (response) => {
        toast.success("Book Returned Successfully",{
          position : 'bottom-center',
          autoClose : 2000,
          hideProgressBar : false,
          closeOnClick : true,
          pauseOnHover : false,
          theme : 'dark'
         });
        navigate(`/membermenu/${memberUsername}`);
      },
      () => {
        toast.error("Return Fail",{
          position : 'bottom-center',
          autoClose : 2000,
          hideProgressBar : false,
          closeOnClick : true,
          pauseOnHover : false,
          theme : 'dark'
         });
      }
    );
  };

  return (
    <>
      <Table striped >
        <thead>
          <tr>
            <td>Issue Id</td>
            <td>Username</td>
            <td>Book Id</td>
            <td>Issued Date</td>
            <td>Return Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{book.issueBookId}</th>
            <th>{book.memberUsername}</th>
            <th>{book.bookId}</th>
            <th style={{ color: "green" }}>{book.issueDate}</th>
            <th style={{ color: "red" }}>{book.returnDate}</th>
            <td>
              <Button
                size="sm"
                color="warning"
                onClick={() => {
                  deleteBook(book.issueBookId);
                }}
              >
                Return Book
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

import React from 'react'
import { Table } from 'reactstrap'

export default function BookForAdmin({book}) {
  return (
    <div>
     <Table striped>
        <thead>
            <tr>
            <td>Issue Id</td>
            <td>Username</td>
            <td>Book Id</td>
            <td>Issued Date</td>
            <td>Return Date</td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th>{book.issueBookId}</th>
            <th>{book.memberUsername}</th>
            <th>{book.bookId}</th>
            <th style={{ color: "green" }}>{book.issueDate}</th>
            <th style={{ color: "red" }}>{book.returnDate}</th>
            </tr>
        </tbody>
     </Table>
    </div>
  )
}

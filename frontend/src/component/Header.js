import React from 'react'
import { Card, CardBody } from 'reactstrap'


export default function Header({name,title}) {
  return (
    <div>
      <Card color='warning'>
        <CardBody>
        <h2 className='text-center my-4'>Library Management System</h2>
        </CardBody>
      </Card>
      
    </div>
  )
}

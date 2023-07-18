// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navi = () => {
  return (
    <div  className='text-dark'>
   <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todolist</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navi
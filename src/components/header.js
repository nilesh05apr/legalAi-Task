import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <div class='flex flex-row'>
                <Navbar.Brand href="#home" >Legal Ai</Navbar.Brand>
            </div>
            <div class='flex justify-content-around'>
            <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#features">LEGAL AREAS</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
            </div>
        </Container>
    </Navbar>
    </>
  )
}

export default Header

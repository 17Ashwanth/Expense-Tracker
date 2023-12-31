import React from 'react'
import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainlogo from '../Assets/logo1.jpg';



function Header() {
  return (
    <div className='header-body text-decoration-none'>
         <Navbar expand="lg">
      <Container>
      <img style={{width:'30px'}} src={mainlogo} alt="" className='rounded-1 ms-2'/> 
        <Navbar.Brand className='text-white' href={'/'}>Spend Wise Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='d-flex justify-content-between'>
          <Nav className="ms-4">
            <Nav.Link className='text-white me-5' href={'/'}>Home</Nav.Link>
            <Nav.Link className='text-white me-5 ' href={'/transaction'}>Transactions</Nav.Link>
            <Nav.Link className='text-white me-5' href={'/history'}>History</Nav.Link>
          </Nav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

// Aromal 
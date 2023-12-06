import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homebgrem from '../Assets/6450135_3094324-removebg-preview.png'
import mainlogo from '../Assets/logo1.jpg'
/* import homeimage from '../Assets/homeimage.jpg' */



function Home() {
  return (
    <div>
        <div className="d-flex justify-content-evenly flex-column mt-5 container">
          <Row>
            <Col md={6}>
              <img className='mb-2 w-25 rounded-4 shadow' src={mainlogo} alt="" /> 
              <h1 className='fw-bold mt-3 home-header'>Spend Wise Hub</h1>
              <h3 className='fw-normal mt-3 home-definition'>Navigate your financial journey with ease. <br /> Spend Wise Hub: Your go-to expense tracker for smart and savvy budgeting.</h3>
              <Link to={'/transaction'} style={{textDecoration:'none'}} className='text-black'>
                <button className='getstart-btn px-3 p-2 rounded-4 align-items-center mt-3'>
                  <i class="fa-solid fa-forward me-2"></i>Get's Started
                </button>
              </Link>
            </Col>
            <Col md={6}>
              <img className='ms-5 w-75' src={homebgrem}  alt="" />
            </Col>
          </Row>
        </div>
       
    </div>
  )
}

export default Home

// Anbunathan
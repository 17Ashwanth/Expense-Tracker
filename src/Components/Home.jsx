import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homebgrem from '../Assets/6450135_3094324-removebg-preview.png'



function Home() {
  return (
    <div>
        <div className="d-flex justify-content-evenly flex-column mt-5 container">
          <Row>
            <Col md={6}>
              <img className='mb-2' src="https://cdn-icons-png.flaticon.com/128/781/781831.png" alt="" /> <h1 className='text-white mt-3'>Spend Wise Hub</h1>
              <h3 className='text-white mt-3'>Navigate your financial journey with ease. <br /> Spend Wise Hub: Your go-to expense tracker for smart and savvy budgeting.</h3>
              <button className='btn btn-outline-success align-items-center mt-5'>
              <Link to={'/transaction'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-forward me-2"></i>Get's Started</Link>
              </button>
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
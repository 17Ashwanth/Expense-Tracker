import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import mainlogo from '../Assets/logo1.jpg';
import { Col, Row } from 'react-bootstrap';


function Footer() {
  return (
    <div  className='footer-body p-5 justify-content-center align-items-center w-100 flex-column mt-4'>
  <Row>
      
      <Col md={4} sm={12}>
        <div className="website ">
        <h4 class='mb-3 fw-semibold'>
        <img style={{width:'50px',marginRight:'20px'}} src={mainlogo} alt="" className='rounded-3'/> Spend Wise Hub
        </h4>
        <h6 className='text-light ' style={{textAlign:'justify'}}>Expense trackers can be in the form of mobile apps, software programs, spreadsheets, or physical notebooks. They typically allow users to input various expenses, such as bills, groceries, transportation, entertainment, and more..</h6>
        </div>
      </Col>
  
      <Col md={2} sm={12}>
        <div className="links d-flex flex-column mt-3">
          <h4 className='mb-3'>Links</h4>
          <Link className='foot-links' to={'/'} style={{textDecoration:'none'}}>Home</Link>
          <Link className='foot-links' to={'/transaction'} style={{textDecoration:'none' }}>Transactions</Link>
          <Link className='foot-links' to={'/history'} style={{textDecoration:'none' }}>History</Link>
        </div>
      </Col>
  
      <Col md={2} sm={12}>
        <div className="guid d-flex flex-column mt-3">
        <h4 className='mb-3'>Guides</h4>
          <Link className='foot-links' to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>React</Link>
          <Link className='foot-links' to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none' }}>React Bootstrap</Link>
          <Link className='foot-links' to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>Bootswatch</Link>
        </div>
      </Col>
  
      <Col md={4} sm={12}>
        <div className="contact  d-flex flex-column mt-3">
          <h4 className='mb-3 '>contact us</h4>
          <div className='d-flex mb-3'>
            <input type="text" className='form-control' placeholder='Enter your Email' />
            <button className='btn btn-light text-dark ms-2'>Submit</button>
          </div>
    
          <div className='foot-icons d-flex justify-content-evenly align-item-center'>
           <Link  style={{textDecoration:'none',color:'#7C8FDB' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
           <Link  style={{textDecoration:'none',color:'#7C8FDB' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
           <Link  style={{textDecoration:'none',color:'#7C8FDB' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
           <Link  style={{textDecoration:'none',color:'#7C8FDB' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
         </div>
        </div>
      </Col>
    
  </Row>
   <div className='text-center'> <p className='mt-5'>copyright  2023 Expence-tracker ,build with react.</p></div>
  </div>
  )
}

export default Footer

// Visruth
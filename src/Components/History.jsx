
// Aswanth and Alok

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import IMG from '../Assets/5331039.jpg'
import { Link } from 'react-router-dom'


function History() {
  return (
    <div>
        <h1 className="text-center text-white mt-4">Transaction History</h1>
        <div className="d-flex justify-content-evenly flex-column mt-5 container">
            <Row className=''>
                <Col md={6}>
                <img src={IMG} alt="" width={'70%'} />
                <div className="mt-5">
                    <div className="border w-75">
                        <h3 className="text-white ms-2">
                            Total Expense : ₹
                        </h3>
                    </div>
                </div>
                </Col>
                <Col md={6}>
                    <h3 className='text-center text-white mb-4'>Watch History</h3>
                   <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-danger align-items-center'>
                            <Link to={'/Home'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
                        </button>
                   </div>
        <table className='table m-5 mb-5 container'>
        <thead>
          <tr>
            <th >SL NO</th>
            <th >ITEMS</th>
            <th >AMOUNT</th>
            <th >DATE</th>
            <th >ACTION</th>
            
          </tr>
        </thead>
        <tbody>
        
          <tr>
          <td>1</td>
          <td>Tea</td>
          <td>15 ₹</td>
          <td>26-11-23</td>
          <td><button><i style={{color:'red'}} class="fa-solid fa-trash"></i></button></td>
        </tr>
        </tbody>
        </table>
                     
                 </Col>
            </Row>
        </div>
    </div>
    )
    }
export default History

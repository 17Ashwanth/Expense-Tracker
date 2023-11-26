import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-primary mt-4'>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
    <div className="website " style={{width:"400px"}}>
    <h4 class='mb-3 text-light'>
    <img style={{width:'50px',marginRight:'20px'}} src="https://cdn-icons-png.flaticon.com/128/781/781831.png" alt="" />   Expence Tracker
    </h4>
    <h6 className='text-light '>Expense trackers can be in the form of mobile apps, software programs, spreadsheets, or physical notebooks. They typically allow users to input various expenses, such as bills, groceries, transportation, entertainment, and more..</h6>
    </div>

    <div className="links d-flex flex-column text-light">
      <h4 className='mb-3'>Links</h4>
      <Link to={'/'} style={{textDecoration:'none',color:'white' }}>Home</Link>
      <Link to={'/transaction'} style={{textDecoration:'none',color:'white' }}>Transaction</Link>
      <Link to={'/history'} style={{textDecoration:'none',color:'white' }}>History</Link>
    </div>

    <div className="guid d-flex flex-column text-light">
    <h4 className='mb-3'>Guides</h4>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white' }}>React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white' }}>React Bootstrap</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white' }}>Bootswatch</Link>
    </div>

    <div className="contact  d-flex flex-column">
      <h4 className='mb-3 text-light'>contact us</h4>
      <div className='d-flex mb-3'>
        <input type="text" className='form-control' placeholder='Enter your Email' />
        <button className='btn btn-warning ms-2'>subscribe</button>
      </div>

      <div className='d-flex justify-content-evenly align-item-center'>
       <Link  style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
       <Link  style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
       <Link  style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
       <Link  style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
     </div>
    </div>
  </div>
    <p className='mt-5 text-light'>copyright  2023 Expence-tracker ,build with react.</p>
  </div>
  )
}

export default Footer

// Visruth
import React from 'react'
import '../index.css'
import addtrlogo from '../Assets/addtrlogo.jpg'

function Transaction() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 tpage-head">
          <h1 className='text-center  mt-4 fw-semibold'>Add transactions</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
            <div>
              <img src={addtrlogo} alt="" className='w-100'/>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="entry-infos p-5 mt-5">
              <div className="amount-input rounded-4 fs-4">
                <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter amount'/>  
              </div>
              <div className="category mt-4">
                <h4 className='fw-semibold ms-2'>Your spend will be categorised into:</h4>
                <div className="category-input rounded-4 fs-4 mt-3">
                  <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter category'/>
                </div>
              </div>
              <div className="add-button mt-5 text-center">
                <button className='btn text-light fw-bold fs-5 rounded-4 w-100'>ADD</button>
              </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Transaction

// Danish and Emil
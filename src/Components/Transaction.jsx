import React, { useState } from 'react'
import '../index.css'
import addtrlogo from '../Assets/addtrlogo.jpg'
import { Link } from 'react-router-dom';
import { addCreditTransaction, addDebitTransaction } from '../services/allAPI';

function Transaction({credit}) {
  const creditForm = credit?true:false

  const [debitTransactions,setDebitTransactions] = useState({
    debitAmount:"",
    debitCategory:""

  })
  console.log(debitTransactions);

  const [creditTransactions,setCreditTransactions] = useState({
    creditAmount:"",
    creditCategory:""
  })
  console.log(creditTransactions);

  const handleAddDebit = async ()=>{
    const {debitAmount,debitCategory}=debitTransactions
    if(!debitAmount || !debitCategory){
      alert('Please fill all the fields!')
    }
    else{
      const response = await addDebitTransaction(debitTransactions)
      console.log(response);

      if(response.status>=200 && response.status<300){
        alert('Your debit transaction added successfully.')
      }
      else{
        alert('Something went wrong!, please try again later.')
      }

    }
  }

  const handleAddCredit = async ()=>{
    const {creditAmount,creditCategory}=creditTransactions
    if(!creditAmount || !creditCategory){
      alert('Please fill all the fields!')
    }
    else{
      const response = await addCreditTransaction(creditTransactions)
      console.log(response);

      if(response.status>=200 && response.status<300){
        alert('Your Credit transaction added successfully.')
      }
      else{
        alert('Something went wrong!, please try again later.')
      }

    }
  }

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
        <div className="col-lg-6 ">
            <div className="entry-infos p-4  ">
              {
                creditForm?
                <div className=''>
                  <div className=' mb-3 text-center'>
                    <Link to={'/transaction'}>
                      <button className=' p-2 px-4  text-white rounded-start-5 rounded-end-0 ' style={{backgroundColor:'#091130',borderColor:'#091130'}}>
                        Debit
                      </button>
                    </Link>
                    <Link to={'/credit'}>
                      <button className='bg-white  p-2 px-4 border-0 text-black rounded-end-5 rounded-start-0 '>
                        Credit
                      </button>
                    </Link>
                  </div>
                </div>
                :
                <div className=' mb-3 text-center'>
                  <Link to={'/transaction'}>
                    <button className='bg-white p-2 px-4 border-0 text-black rounded-start-5 rounded-end-0 '>
                      Debit
                    </button>
                  </Link>
                  <Link to={'/credit'}>
                    <button className=' p-2 px-4   text-white rounded-end-5 rounded-start-0 ' style={{backgroundColor:'#091130',borderColor:'#091130'}}>
                      Credit
                    </button>
                  </Link>
                </div>
              }

              {creditForm?
                <div className='input-content align-items-center d-flex flex-column'>
                <div className="amount-input rounded-4 fs-4 w-75">
                  <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter amount' onChange={(e)=>setCreditTransactions({...creditTransactions,creditAmount:e.target.value})}/>  
                </div>
                <div className="category mt-2 align-items-center d-flex flex-column w-75">
                    <p className='fw-semibold ms-0  w-100'>
                      The money you have been receiving will be categorised into:
                    </p>
                  <div className="category-input rounded-4 fs-4 mt-3  w-100">
                    <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter category' onChange={(e)=>setCreditTransactions({...creditTransactions,creditCategory:e.target.value})}/>
                  </div>
                </div>
                <div className="add-button mt-3 text-center  w-75">
                  <button className='btn text-light fw-bold fs-5 rounded-4 w-100' onClick={handleAddCredit}>ADD</button>
                </div>
              </div>


              :

              
              <div className='input-content align-items-center d-flex flex-column'>
                <div className="amount-input rounded-4 fs-4 w-75">
                  <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter amount' onChange={(e)=>setDebitTransactions({...debitTransactions,debitAmount:e.target.value})}/>  
                </div>
                <div className="category mt-2 align-items-center d-flex flex-column w-75">
                    <p className='fw-semibold ms-0  w-100'>
                      Your spend will be categorised into:   
                    </p>
                  <div className="category-input rounded-4 fs-4 mt-3  w-100">
                    <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter category' onChange={(e)=>setDebitTransactions({...debitTransactions,debitCategory:e.target.value})}/>
                  </div>
                </div>
                <div className="add-button mt-3 text-center  w-75">
                  <button className='btn text-light fw-bold fs-5 rounded-4 w-100' onClick={handleAddDebit}>ADD</button>
                </div>
              </div>
              }

            </div>  
        </div>
      </div>
    </div>
  )
}

export default Transaction

// Danish and Emil
import React, { useState } from 'react'
import '../index.css'
import addtrlogo from '../Assets/addtrlogo.jpg'
import { Link } from 'react-router-dom';
import {addToHistory } from '../services/allAPI';

function Transaction({credit}) {
    const today = new Date()
    let date = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit'}).format(today)
    let time = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(date);
    console.log(time);
  const creditForm = credit?true:false

  const [error,setError] = useState("");

  const [debitTransactions,setDebitTransactions] = useState({
    amount:"",
    category:"",
    mode:'debit',
    date : date,
    time: time
  
  })
  console.log(debitTransactions);

  const [creditTransactions,setCreditTransactions] = useState({
    amount:"",
    category:"",
    mode:'credit',
    date: date,
    time: time


  })
  console.log(creditTransactions);

  const getValidate = (e)=>{
      const {value , name } = e.target;

      if(/^(0|[1-9]\d*)$/.test(value)){
        setError('')
        
        if(name=='credit'){
          setCreditTransactions({...creditTransactions,amount:value})
        }
        else{
          setDebitTransactions({...debitTransactions,amount:value})
        }
      }
      else if(value==""){
         setError("cannot be empty")
      }
      else{
          setError("Only numbers are allowed")
      }
  }

  const handleAddDebit = async ()=>{
    const {amount,category}=debitTransactions
    if(!amount || !category){
      alert('Please fill all the fields!') 
    }
    else{
      const response = await addToHistory(debitTransactions)
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
    const {amount,category}=creditTransactions
    if(!amount || !category){
      alert('Please fill all the fields!')
    }
    else{
      const response = await addToHistory(creditTransactions)
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
                  <input name='credit' className='ps-3 p-2 rounded-4' type="text" placeholder='Enter amount' 
                  onChange={(e)=>getValidate(e)}/>
                </div>
                <div className="category mt-2 align-items-center d-flex flex-column w-75">
                    <p className='w-100 ms-0 fw-semibold text-danger'>{error}</p>
                    <p className='fw-semibold ms-0  w-100'>
                      The money you have been receiving will be categorised into:
                    </p>
                  <div className="category-input rounded-4 fs-4 mt-3  w-100">
                    <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter category' 
                    onChange={(e)=>setCreditTransactions({...creditTransactions,category:e.target.value})}/>
                  </div>
                </div>
                <div className="add-button mt-3 text-center  w-75">
                  <button className='btn text-light fw-bold fs-5 rounded-4 w-100' onClick={handleAddCredit}>ADD</button>
                </div>
              </div>


              :

              
              <div className='input-content align-items-center d-flex flex-column'>
                <div className="amount-input rounded-4 fs-4 w-75">
                  <input name='debit' className='ps-3 p-2 rounded-4' type="text" placeholder='Enter amount' onChange={(e)=>getValidate(e)}/>  
                </div>
                <div className="category mt-2 align-items-center d-flex flex-column w-75">
                    <p className='w-100 ms-0 fw-semibold text-danger'>{error}</p>
                    <p className='fw-semibold ms-0  w-100'>
                      Your spend will be categorised into:   
                    </p>
                  <div className="category-input rounded-4 fs-4 mt-3  w-100">
                    <input className='ps-3 p-2 rounded-4' type="text" placeholder='Enter category' onChange={(e)=>setDebitTransactions({...debitTransactions,category:e.target.value})}/>
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
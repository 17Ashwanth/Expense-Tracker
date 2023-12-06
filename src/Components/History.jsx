
// Aswanth and Alok

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
/* import IMG from '../Assets/v910-aew-061.jpg' */
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'


function History() {

    const [history , setHistory] = useState([])

    const getAllHistory = async()=>{
        const response = await getHistory();
        const {data} = response;
        setHistory(data) 
    }
  
    useEffect(()=>{
        getAllHistory()
    },[])

    //function to remove history
    const removeHis = async(id)=>{
    await deleteHistory(id)
    //to get the reaming history
    getAllHistory()
  }

    const today = new Date()
    var todayDate = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit'}).format(today)
    

    var totalExpense = history.filter((item)=>item.mode=="debit").reduce((sum, obj) => sum + parseInt(obj.amount), 0);
    var totalIncome = history.filter((item)=>item.mode=="credit").reduce((sum,obj)=>sum+parseInt(obj.amount),0);
    var todayExpense = history.filter((item)=>item.date==todayDate && item.mode=='debit').reduce((sum,obj)=>sum+parseInt(obj.amount),0)
    var todayIncome = history.filter((item)=>item.date==todayDate && item.mode=='credit').reduce((sum,obj)=>sum+parseInt(obj.amount),0)

  return (
    <div>
        <div className="d-flex justify-content-evenly flex-column mt-5 container px-lg-5">
            <Row className=''>
                
                {/* <img src={IMG} alt="" width={'90%'} /> */}
                
                    <Col md={6}>
                        <div className="border mt-3 rounded-3" style={{backgroundColor:'#091130'}}>
                            <h3 className="text-white m-0 p-4">
                                Total Expense : {totalExpense}
                            </h3>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="border mt-3 rounded-3 " style={{backgroundColor:'#091130'}}>
                            <h3 className="text-white m-0 p-4">
                                Total Income : {totalIncome}
                            </h3>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="border mt-3 rounded-3" style={{backgroundColor:'#091130'}}>
                            <h3 className="text-white m-0 p-4">
                                Total Expense Today : {todayExpense}
                            </h3>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="border mt-3 rounded-3" style={{backgroundColor:'#091130'}}>
                            <h3 className="text-white m-0 p-4">
                                Total Income Today : {todayIncome}
                            </h3>
                        </div>
                    </Col>
                    
                
                
            </Row>
            <Row>
                <Col md={12}>
                <h1 className="text-center mt-4 mb-4 fw-bold" style={{color:'#091130'}}>Transaction History</h1>
                   
                    <table className='table  mb-5 container '>
                        <thead className=''>
                            {history?.length>0?
                            <tr >

                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>DATE</th>
                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>TIME</th>
                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>CATEGORY</th>
                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>AMOUNT</th>
                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>MODE</th>
                                <th className='text-center bg-transparent  fw-bold'style={{color:'#091130'}}>ACTION</th>
            
                            </tr>
                             :
                        <div className='text-center'>
                            <p className='bg-transparent rounded-2 fw-semibold'>You have no transactions yet!</p>
                            <img width={'200px'} className='rounded-5 border-0 border bg-transparent' src="https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif" alt="" />
                        </div>
                        }
                        </thead>
                        <tbody>

                            {  
                                history.map((item)=>(
                                <tr>
                                    {/* <td>{item.id}</td> */}
                                    <td className='text-center bg-transparent text-white '>{item.date}</td>
                                    <td className='text-center bg-transparent text-white '>{item.time}</td>
                                    <td className='text-center bg-transparent text-white '>{item.category}</td>
                                    <td className='text-center bg-transparent text-white '>{item.amount}</td>
                                    <td className='text-center bg-transparent text-white '>{item.mode}</td>
                                    <td className='text-center bg-transparent text-white '>
                                        <button className='w-50 rounded-2 border-0 border remove-btn'  onClick={()=>removeHis(item?.id)}><i class="fa-solid fa-trash "></i>
                                        </button>
                                    </td>
                                </tr>
                                ))          
                            }            
                        </tbody>
                    </table>                    
                </Col>
            </Row>
            <div className='d-flex mt-3'>                        
                <Link to={'/'} style={{textDecoration:'none'}}>
                <button className='getstart-btn px-3 p-2 rounded-4 align-items-center mt-3'>
                    <i class="fa-solid fa-backward me-2"></i>Back to Home
                </button>
                </Link>
            </div>
        </div>
    </div>
    )
    }
export default History

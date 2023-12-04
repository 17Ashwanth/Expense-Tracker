
// Aswanth and Alok

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import IMG from '../Assets/v910-aew-061.jpg'
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
        <div className="d-flex justify-content-evenly flex-column mt-5 container">
            <Row className=''>
                <Col md={6}>
                <img src={IMG} alt="" width={'90%'} />
                <div className="mt-5">
                    <div className="border w-75">
                        <h3 className="text-white ms-2 p-3">
                            Total Expense : {totalExpense}
                        </h3>
                    </div>
                    <div className="border mt-3 w-75">
                        <h3 className="text-white ms-2 p-3">
                            Total Income : {totalIncome}
                        </h3>
                    </div>
                    <div className="border w-75 mt-3">
                        <h3 className="text-white ms-2 p-3">
                            Total Expense Today : {todayExpense}
                        </h3>
                    </div>
                    <div className="border w-75 mt-3">
                        <h3 className="text-white ms-2 p-3">
                            Total Income Today : {todayIncome}
                        </h3>
                    </div>
                    <div className='d-flex mt-3'>
                        <button className='btn btn-outline-danger align-items-center'>
                            <Link to={'/Home'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
                        </button>
                   </div>
                </div>
                </Col>
                <Col md={6}>
                <h1 className="text-center text-white mt-4 mb-4">Transaction History</h1>
                   
        <table className='table m-5 mb-5 container'>
        <thead>
          <tr>
{/*             <th >SL NO</th> */}
            <th style={{textAlign:'center'}} >DATE</th>
            <th >TIME</th>
            <th >CATEGORY</th>
            <th >AMOUNT</th>
            <th >MODE</th>
            <th >ACTION</th>
            
          </tr>
        </thead>
        <tbody>

            {

                history?.length>0?
                history.map((item)=>(
                <tr>
                    {/* <td>{item.id}</td> */}
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                    <td>{item.mode}</td>
                    <td><button className='ms-3' style={{backgroundColor:'black'}} onClick={()=>removeHis(item?.id)}><i class="fa-solid fa-trash text-white"></i></button></td>
                </tr>
                    
                ))

                :

                <p>Nothing to display</p>
                
            }
     
          
             
        </tbody>
        </table>
        
                     
                 </Col>
            </Row>
        </div>
    </div>
    )
    }
export default History

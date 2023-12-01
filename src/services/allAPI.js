import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"




//add Debit Transactions

export const addDebitTransaction = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/debitTransactions`,reqBody)
}

//add Credit Transaction

export const addCreditTransaction = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/creditTransactions`,reqBody)
}
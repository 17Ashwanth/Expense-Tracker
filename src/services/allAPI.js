import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"




//add Debit Transactions

export const addDebitTransaction = async(reqBody)=>{
    await commonAPI('POST',`${serverURL}/debitTransactions`,reqBody)
}

//add Credit Transaction

export const addCreditTransaction = async(reqBody)=>{
    await commonAPI('POST',`${serverURL}/creditTransactions`,reqBody)
}
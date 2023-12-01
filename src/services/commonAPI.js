import axios from "axios"

export const commonAPI = async (httpMethod,url,reqBody)=>{
    let reqConfig = {
        
        method: httpMethod,
        url,
        data: reqBody,
        Headers:{
            "Content-type":"multipart/form-data"      
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}
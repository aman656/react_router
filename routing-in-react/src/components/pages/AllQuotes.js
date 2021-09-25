import QuoteList from '../quotes/QuoteList'
import React, { useCallback, useEffect, useState} from 'react'


// const DUMMY_LIST = [{
//     id:"q1",author:"No one",text:"Follow someone"},
//     {id:"q2",author:"Again",text:"You will be following"}]

const AllQuotes = ()=>{
    const [DUMMY_LIST,setDUMMY_LIST] = useState([])
    console.log("data")
    const fetchingfromDatabase = useCallback(async()=>{
    
        try{
        const response = await fetch("https://webapp-e180b-default-rtdb.firebaseio.com/quotes.json")
        if(!response.ok){
            throw new Error("Something went wrong")
        }
    
        const data = await response.json()
        
        const list = []
        for (const key in data){
            list.push({
                id:key,
                author:data[key].author,
                text:data[key].text
            })
        }
        setDUMMY_LIST(list)
    }catch(err){
            console.log(err)

        } 
       
    },[])
    useEffect(()=>{
          fetchingfromDatabase()
    },[fetchingfromDatabase])

    return(
        <QuoteList quotes = {DUMMY_LIST}/>
    )
}
export default AllQuotes
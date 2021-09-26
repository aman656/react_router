import QuoteList from '../quotes/QuoteList'
import React, { useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchingfromDataBase } from './store'
import LoadingSpinner from '../UI/LoadingSpinner'

const AllQuotes = ()=>{
    // const [DUMMY_LIST,setDUMMY_LIST] = useState([])
    const alllist = useSelector(state=>state.quoteReducer.quotesList)
    const dispatch = useDispatch()
    console.log("data")
    // const fetchingfromDatabase = useCallback(async()=>{
    
    //     try{
    //     const response = await fetch("https://webapp-e180b-default-rtdb.firebaseio.com/quotes.json")
    //     if(!response.ok){
    //         throw new Error("Something went wrong")
    //     }
    
    //     const data = await response.json()
        
    //     const list = []
    //     for (const key in data){
    //         list.push({
    //             id:key,
    //             author:data[key].author,
    //             text:data[key].text
    //         })
    //     }
    //     setDUMMY_LIST(list)
    // }catch(err){
    //         console.log(err)

    //     } 
       
    // },[])
    // useEffect(()=>{
    //       fetchingfromDatabase()
    // },[fetchingfromDatabase])
    useEffect(()=>{
        dispatch(fetchingfromDataBase())

    },[dispatch])

    return(
        (alllist.length===0  ? <LoadingSpinner/>: <QuoteList quotes = {alllist}/>)
    )
}
export default AllQuotes
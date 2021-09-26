import QuoteForm from '../quotes/QuoteForm'
import { useHistory } from 'react-router'


const AddQuote = ()=>{
    
    const history = useHistory()
    // useEffect(()=>{
    //     if(status==="completed"){
    //         history.push("/quotes")
    //     }
    // },[status,history])
    const addingQuote = (quote)=>{
        console.log(quote)
        const sendingData = async()=>{
           await fetch("https://webapp-e180b-default-rtdb.firebaseio.com/quotes.json",{
            method:"POST",
            body:JSON.stringify({author:quote.author,text:quote.text})
        })
    }
        try{
            sendingData()
            history.push("/quotes")
            
        }
        catch(err){
             throw new Error ("Something went wrong!");
        }
    }
    return(
         <QuoteForm onAdding = {addingQuote}/>  
    )
}

export default AddQuote;
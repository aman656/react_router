import { useParams,useLocation } from "react-router"
import { Route } from "react-router"
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'
import { Link } from "react-router-dom"
import { useCallback,useEffect,useState } from "react"


const QuoteDetail = ()=>{
    const params=  useParams()
    const location = useLocation()
    const[quotes,setQuotes] =useState({})
    let isShow ;
    if(location.pathname==="/quotes/" + params.id){
        isShow = true
    }
    // const quote = DUMMY_LIST.find((quote)=>  quote.id===params.id)
    const fetchingSingleQuote = useCallback(async()=>{
    
        try{
        const response = await fetch(`https://webapp-e180b-default-rtdb.firebaseio.com/quotes/${params.id}.json`)
        if(!response.ok){
            throw new Error("Something went wrong")
        }
    
        const data = await response.json()
        console.log(data)
    
            setQuotes({
                id:params.id,
                ...data
            })
        
        
      
    }catch(err){
            console.log(err)

        } 
        
       
    },[params.id])
    useEffect(()=>{
          fetchingSingleQuote()
    },[fetchingSingleQuote])

    let error;

    if(!quotes){
        error  = "No quote found!"
    }
    
    return(
        <div>
        {quotes ?<HighlightedQuote  author = {quotes.author} text = {quotes.text} />: <p>{error}</p>}
        <div className="centered">
            {isShow && <Link   className="btn--flat"         to={`/quotes/${params.id}/comments`}>Load Comments</Link>}
        </div>
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments  path = {params.id}/>

        </Route>
        

        </div>
    )
}
export default QuoteDetail
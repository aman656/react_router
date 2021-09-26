import { useParams,useLocation } from "react-router"
import { Route } from "react-router"
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchingSingleQuote } from "./store"


const QuoteDetail = ()=>{
    const params=  useParams()
    const location = useLocation()
    const single = useSelector(state=>state.quoteReducer.singleQuote)
    const dispatch =useDispatch()
    let isShow ;
    if(location.pathname==="/quotes/" + params.id){
        isShow = true
    }
    useEffect(()=>{
        dispatch(fetchingSingleQuote(params.id))
    

    },[dispatch,params.id])

    // let error;
    // if(single===null){
    //     error="No quotes found"

    // }

    
    return(
        <div>
         <HighlightedQuote  author = {single.author} text = {single.text} /> 
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
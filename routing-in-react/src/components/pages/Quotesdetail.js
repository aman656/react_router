import { useParams,useLocation } from "react-router"
import { Route } from "react-router"
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'
import { Link } from "react-router-dom"

const DUMMY_LIST = [{
    id:"q1",author:"No one",text:"Follow someone"},
    {id:"q2",author:"Again",text:"You will be folllowed by someone"}
]

const QuoteDetail = ()=>{
    const params=  useParams()
    const location = useLocation()
    let isShow ;
    console.log(location)
    if(location.pathname==="/quotes/" + params.id){
        isShow = true
    }
    const quote = DUMMY_LIST.find((quote)=>  quote.id===params.id)
    let error;

    if(!quote){
        error  = "No quote found!"
    }
    
    return(
        <div>
        {quote ?<HighlightedQuote  author = {quote.author} text = {quote.text} />: <p>{error}</p>}
        <div className="centered">
            {isShow && <Link   className="btn--flat"         to={`/quotes/${params.id}/comments`}>Load Comments</Link>}
        </div>
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments/>

        </Route>
        

        </div>
    )
}
export default QuoteDetail
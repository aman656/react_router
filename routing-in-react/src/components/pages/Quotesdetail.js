import { useParams } from "react-router"
import { Route } from "react-router"
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'

const DUMMY_LIST = [{
    id:"q1",author:"No one",text:"Follow someone"},
    {id:"q2",author:"Again",text:"You will be folllowed by someone"}
]

const QuoteDetail = ()=>{
    const params=  useParams()
    const quote = DUMMY_LIST.find((quote)=>  quote.id===params.id)
    let error;

    if(!quote){
        error  = "No quote found!"
    }
    
    return(
        <div>
        {quote ?<HighlightedQuote  author = {quote.author} text = {quote.text} />: <p>{error}</p>}
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments/>

        </Route>

        </div>
    )
}
export default QuoteDetail
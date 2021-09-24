import QuoteList from '../quotes/QuoteList'


const DUMMY_LIST = [{
    id:"q1",author:"No one",text:"Follow someone"},
    {id:"q2",author:"Again",text:"You will be folllowed by someone"}
]
const AllQuotes = ()=>{
    return(
        <QuoteList quotes = {DUMMY_LIST}/>
    )
}
export default AllQuotes
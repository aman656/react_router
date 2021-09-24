import QuoteForm from '../quotes/QuoteForm'
import { useHistory } from 'react-router'

const AddQuote = ()=>{
    const history = useHistory()
    const addingQuote = (quote)=>{
        console.log(quote)
        history.push("/quotes")

    }
    return(
        <QuoteForm onAdding = {addingQuote}/>
    )
}

export default AddQuote;
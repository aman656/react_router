import {createSlice,configureStore} from '@reduxjs/toolkit'


const quoteSlice = createSlice({
    name:"quotes",
    initialState:{quotesList:[],singleQuote:{}},
    reducers:{
        replaceList(state,action){
            state.quotesList = action.payload.list
        },
        onlyquote(state,action){
            state.singleQuote ={...state.singleQuote,
                id:action.payload.id,
                text:action.payload.text,
                author:action.payload.author

            }
        }
    }
})

const store = configureStore({
    reducer:{quoteReducer:quoteSlice.reducer}
})

export const fetchingfromDataBase = ()=>{
    return async (dispatch)=>{
        const fetchingData  = async()=>{
            const response = await fetch("https://webapp-e180b-default-rtdb.firebaseio.com/quotes.json")
            if(!response.ok){
                throw new Error ("Something went wrong!")
            }
            const data = await response.json()
        
            return data;

        }
        try{
            const cartData = await fetchingData()
            const list = [];
            for (const key in cartData){
                list.push({
                    id:key,
                    author:cartData[key].author,
                    text:cartData[key].text
           })

            }
            dispatch(quotesActions.replaceList({
                list:list || [],

            }))
            

        }catch(error){
            console.log(error)
            // dispatch(cartActions.showRequestStatus({
            //     status:'success',
            //     message:"Data fetched ",
            //     title:"Successfully fetch the data"
            }
        }

    }
export const fetchingSingleQuote =(id)=>{
    return async(dispatch)=>{
        const singleQuote = async()=>{
            const response = await fetch(`https://webapp-e180b-default-rtdb.firebaseio.com/quotes/${id}.json`)
            if(!response.ok){
                throw new Error ("Something went wrong!")
            }
            const data = await response.json()
            return data;

        }
        try{
            const dataget = await singleQuote()
            dispatch(quotesActions.onlyquote({
                id:id,
                text:dataget.text,
                author:dataget.author
            }))

        }catch(err){
            console.log(err)
        }

    }
}

export const quotesActions = quoteSlice.actions

export default store

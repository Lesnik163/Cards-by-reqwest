import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { mockObject } from "../mockData";
import { getCards } from "../services";

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const response = await getCards()
        console.log(response.news)   
        return response.news
    }
)
const cardSlice =  createSlice({
    name: 'cards',
    initialState:{
        cardList: [],
    },
    reducers:{
       handleBtnColor:(state,action) => {
            
            console.log(action.payload)
            
            state.cardList = state.cardList.map((obj) => {
                        if(obj.id !== action.payload) {
                            return obj
                        }
                        obj.liked = !obj.liked
                        return obj
                })
        },
        handleQuantityCard:(state, action) => {
            state.cardList = state.cardList.filter((obj) => obj.id !== action.payload )
    },
    extraReducers:(builder) => {
        builder.addCase(fetchCards.fulfilled,(state, action) => {
            console.log('fffff')
            state.cardList = action.payload
        })
    }
}
})
export const {handleBtnColor, handleQuantityCard} = cardSlice.actions
export default cardSlice.reducer
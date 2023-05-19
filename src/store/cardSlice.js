import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { mockObject } from "../mockData";
// import { getCards } from "../services";

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch("https://api.currentsapi.services/v1/latest-news?language=en&apiKey=Fw07-oG8z-92ktSm0nHBes-AydcXTYNydy9nZxBP3xY1gQZT")
            if(!response.status){
                throw new Error('Server error')
            }
            const data = await response.json();
            return data.news.slice(0,12)
        }catch(error) {
            return rejectWithValue(error.message)
        }
    }
)
const cardSlice =  createSlice({
    name: 'cards',
    initialState:{
        cardList: [],
        status: null,
        error: null
    },
    reducers:{
       handleBtnColor:(state,action) => {
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
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchCards.pending,(state) => {
            state.status = 'pending';
            state.error = null
        })
        builder.addCase(fetchCards.fulfilled,(state, action) => {
            state.status = 'fulfilled'
            state.cardList = action.payload
        })
        builder.addCase(fetchCards.rejected,(state, action) => {
            state.error = 'rejected';
            state.status = action.payload
        })
    }
})
export const {handleBtnColor, handleQuantityCard} = cardSlice.actions
export default cardSlice.reducer